import { useState } from "react";
import { fallacies, coreRules, philosophy, type Fallacy } from "@/data/fallacies";

type TeamKey = 1 | 2;

interface StrikeEntry {
  team: string;
  fallacy: string;
  pts: number;
  time: string;
  escalated: boolean;
  repeat: number;
  note: string;
}

function getEscalatedPts(f: Fallacy, repeatCount: number): number {
  if (f.tiered) {
    const idx = Math.min(repeatCount, f.tiered.length - 1);
    return f.tiered[idx];
  }
  if (!f.escalates || repeatCount === 0) return f.basePts;
  return f.basePts + repeatCount * Math.floor(f.basePts * 0.5);
}

export default function LogicSieve() {
  const [teamNames, setTeamNames] = useState<Record<TeamKey, string>>({ 1: "DEBATER A", 2: "DEBATER B" });
  const [scores, setScores] = useState<Record<TeamKey, number>>({ 1: 0, 2: 0 });
  const [activeTarget, setActiveTarget] = useState<TeamKey>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFallacy, setSelectedFallacy] = useState<Fallacy | null>(null);
  const [strikeLog, setStrikeLog] = useState<StrikeEntry[]>([]);
  const [repeatCounts, setRepeatCounts] = useState<Record<string, number>>({});
  const [lastMsg, setLastMsg] = useState<string | null>(null);
  const [showRules, setShowRules] = useState(false);
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [judgeNote, setJudgeNote] = useState("");

  const catList = ["RULEBOOK", "FORMAL", "RELEVANCE", "APPEALS", "DATA", "TRAPS", "STATS", "LANGUAGE", "ETHICAL", "COGNITIVE"];

  const catColors: Record<string, string> = {
    RULEBOOK: "#ff4d4d", FORMAL: "#ff8800", RELEVANCE: "#ffcc00",
    APPEALS: "#00ccff", DATA: "#00ff88", TRAPS: "#cc44ff",
    STATS: "#4488ff", LANGUAGE: "#ff44aa", ETHICAL: "#44ffcc", COGNITIVE: "#aaff44",
  };

  const filtered = fallacies.filter((f) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || f.id.toLowerCase().includes(q) || f.name.toLowerCase().includes(q);
    const matchesCategory = selectedCategory === "ALL" || f.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedFiltered = catList
    .map((cat) => ({ cat, items: filtered.filter((f) => f.category === cat) }))
    .filter(({ items }) => items.length > 0);

  const getRepeat = (teamKey: TeamKey, fallacyId: string) =>
    repeatCounts[`${teamKey}:${fallacyId}`] ?? 0;

  const confirmStrike = () => {
    if (!selectedFallacy) return;
    const repeatKey = `${activeTarget}:${selectedFallacy.id}`;
    const currentRepeat = repeatCounts[repeatKey] ?? 0;
    const pts = getEscalatedPts(selectedFallacy, currentRepeat);
    const escalated = currentRepeat > 0;
    const teamName = teamNames[activeTarget];
    const time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    setScores((prev) => ({ ...prev, [activeTarget]: prev[activeTarget] - pts }));
    setRepeatCounts((prev) => ({ ...prev, [repeatKey]: currentRepeat + 1 }));
    setStrikeLog((prev) => [{ team: teamName, fallacy: selectedFallacy.name, pts, time, escalated, repeat: currentRepeat + 1, note: judgeNote.trim() }, ...prev]);
    setLastMsg(`-${pts}pts applied to ${teamName}${escalated ? ` [ESCALATED ×${currentRepeat + 1}]` : ""}`);
    setSelectedFallacy(null);
    setJudgeNote("");
  };

  const resetMatch = () => {
    setScores({ 1: 0, 2: 0 });
    setStrikeLog([]);
    setRepeatCounts({});
    setLastMsg(null);
    setSelectedFallacy(null);
  };

  const previewPts = selectedFallacy
    ? getEscalatedPts(selectedFallacy, getRepeat(activeTarget, selectedFallacy.id))
    : 0;

  const isEscalated = selectedFallacy
    ? getRepeat(activeTarget, selectedFallacy.id) > 0
    : false;

  return (
    <div style={{ background: "#050505", color: "#dcdcdc", fontFamily: "'Courier New', monospace", minHeight: "100vh", padding: 16, overflowX: "hidden" }}>
      {/* Header */}
      <div style={{ marginBottom: 14, borderBottom: "1px solid #1a1a1a", paddingBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div>
            <div style={{ color: "#721c24", fontSize: "0.58rem", letterSpacing: "3px", marginBottom: 2 }}>ZERO-BASED ELIMINATION SYSTEM</div>
            <div style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 900, letterSpacing: "1px" }}>
              SUPERVIVE AUT MORI <span style={{ color: "#ff4d4d" }}>EX</span>
            </div>
            <div style={{ color: "#444", fontSize: "0.58rem", letterSpacing: "2px", marginTop: 2 }}>ABSOLUTE DEBATE RULEBOOK · LOGIC ENGINE</div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button onClick={() => { setShowPhilosophy((v) => !v); setShowRules(false); }} style={headerBtn(showPhilosophy)}>PHILOSOPHY</button>
            <button onClick={() => { setShowRules((v) => !v); setShowPhilosophy(false); }} style={headerBtn(showRules)}>CORE RULES</button>
          </div>
        </div>

        {showPhilosophy && (
          <div style={{ marginTop: 12, background: "#0a0000", border: "1px solid #2a0a0a", padding: "12px 14px" }}>
            {philosophy.split("\n\n").map((p, i) => (
              <p key={i} style={{ color: "#999", fontSize: "0.72rem", lineHeight: 1.6, margin: i === 0 ? 0 : "8px 0 0 0" }}>{p}</p>
            ))}
          </div>
        )}

        {showRules && (
          <div style={{ marginTop: 12, background: "#0a0000", border: "1px solid #2a0a0a", padding: "12px 14px" }}>
            <div style={{ color: "#ff4d4d", fontSize: "0.65rem", letterSpacing: "2px", marginBottom: 8 }}>CORE RULES</div>
            {coreRules.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 5 }}>
                <span style={{ color: "#721c24", fontSize: "0.7rem", minWidth: 16 }}>{i + 1}.</span>
                <span style={{ color: "#aaa", fontSize: "0.7rem", lineHeight: 1.4 }}>{r}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scoreboard */}
      <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
        {([1, 2] as TeamKey[]).map((t) => (
          <div
            key={t}
            onClick={() => setActiveTarget(t)}
            style={{
              flex: 1,
              background: "#080808",
              padding: "12px 14px",
              border: `1px solid ${activeTarget === t ? "#721c24" : "#1a1a1a"}`,
              borderTop: `3px solid ${activeTarget === t ? "#ff4d4d" : "#2a2a2a"}`,
              cursor: "pointer",
              transition: "border 0.15s",
            }}
          >
            <input
              value={teamNames[t]}
              onChange={(e) => setTeamNames((prev) => ({ ...prev, [t]: e.target.value.toUpperCase() }))}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "transparent", border: "none", color: activeTarget === t ? "#ff4d4d" : "#666",
                fontSize: "0.75rem", fontWeight: "bold", textAlign: "center", width: "100%",
                outline: "none", cursor: "text", fontFamily: "inherit", letterSpacing: "2px",
              }}
            />
            <div style={{ fontSize: "3.5rem", fontWeight: 900, color: scores[t] < -50 ? "#ff1a1a" : scores[t] < 0 ? "#ff4d4d" : "#fff", textAlign: "center", lineHeight: 1.1, margin: "4px 0" }}>
              {scores[t]}
            </div>
            <div style={{ color: activeTarget === t ? "#721c24" : "#2a2a2a", fontSize: "0.55rem", textAlign: "center", letterSpacing: "2px" }}>
              {activeTarget === t ? "▶ ACTIVE TARGET" : "CLICK TO TARGET"}
            </div>
            {Object.entries(repeatCounts)
              .filter(([k]) => k.startsWith(`${t}:`))
              .filter(([, v]) => v > 0)
              .length > 0 && (
              <div style={{ marginTop: 6, display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
                {Object.entries(repeatCounts)
                  .filter(([k]) => k.startsWith(`${t}:`))
                  .filter(([, v]) => v > 0)
                  .map(([k, v]) => {
                    const fid = k.split(":")[1];
                    return (
                      <span key={k} style={{ background: "#1a0000", border: "1px solid #5a0a0a", color: "#ff4d4d", fontSize: "0.5rem", padding: "1px 4px" }}>
                        {fid}×{v}
                      </span>
                    );
                  })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Control Panel */}
      <div style={{ background: "#080808", border: "1px solid #1a1a1a", padding: "12px 14px", marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
          <span style={{ color: "#444", fontSize: "0.65rem", letterSpacing: "1px" }}>TARGETING:</span>
          <select
            value={activeTarget}
            onChange={(e) => setActiveTarget(Number(e.target.value) as TeamKey)}
            style={{ background: "#000", color: "#ff4d4d", border: "1px solid #333", padding: "3px 6px", fontSize: "0.7rem", fontFamily: "inherit", cursor: "pointer" }}
          >
            <option value={1}>{teamNames[1]}</option>
            <option value={2}>{teamNames[2]}</option>
          </select>
          <button onClick={resetMatch} style={{ marginLeft: "auto", background: "transparent", border: "1px solid #2a2a2a", color: "#444", padding: "3px 10px", fontSize: "0.6rem", cursor: "pointer", fontFamily: "inherit", letterSpacing: "1px" }}>
            RESET MATCH
          </button>
        </div>

        <input
          type="text"
          placeholder="SEARCH FALLACY CODE OR NAME..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", background: "#000", border: "1px solid #2a2a2a", color: "#0f0", padding: "9px 12px", fontSize: "0.8rem", marginBottom: 10, outline: "none", fontFamily: "inherit", boxShadow: "inset 0 0 5px rgba(0,255,0,0.06)" }}
        />

        {/* Inspector */}
        <div style={{ minHeight: 80 }}>
          {selectedFallacy ? (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                <span style={{ color: "#ff4d4d", fontWeight: 900, fontSize: "0.9rem", letterSpacing: "1px" }}>{selectedFallacy.name}</span>
                <span style={{ background: "#1a0000", border: `1px solid ${isEscalated ? "#ff1a1a" : "#721c24"}`, color: isEscalated ? "#ff1a1a" : "#ff4d4d", fontSize: "0.65rem", padding: "2px 6px", fontWeight: 900 }}>
                  -{previewPts}pts{isEscalated ? " [ESCALATED]" : ""}
                </span>
                <span style={{ color: "#444", fontSize: "0.6rem" }}>{selectedFallacy.id}</span>
                {isEscalated && (
                  <span style={{ color: "#ff6600", fontSize: "0.58rem" }}>
                    ×{getRepeat(activeTarget, selectedFallacy.id) + 1} REPEAT
                  </span>
                )}
              </div>
              <div style={{ marginBottom: 6 }}>
                <span style={{ color: "#555", fontSize: "0.65rem" }}>VIOLATION: </span>
                <span style={{ color: "#aaa", fontSize: "0.72rem" }}>{selectedFallacy.explanation}</span>
              </div>
              <div style={{ marginBottom: 6 }}>
                <span style={{ color: "#555", fontSize: "0.65rem" }}>EXAMPLE: </span>
                <span style={{ color: "#777", fontSize: "0.68rem", fontStyle: "italic" }}>{selectedFallacy.example}</span>
              </div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ color: "#555", fontSize: "0.65rem" }}>JUDGE: </span>
                <span style={{ color: "#666", fontSize: "0.65rem" }}>{selectedFallacy.judgeAction}</span>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ color: "#555", fontSize: "0.65rem", letterSpacing: "1px", marginBottom: 4 }}>JUDGE NOTES:</div>
                <textarea
                  value={judgeNote}
                  onChange={(e) => setJudgeNote(e.target.value)}
                  placeholder="Type context, quote, or reasoning for this deduction..."
                  rows={3}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: "#000",
                    border: "1px solid #2a2a2a",
                    color: "#ccc",
                    padding: "8px 10px",
                    fontSize: "0.72rem",
                    fontFamily: "inherit",
                    resize: "vertical",
                    outline: "none",
                    lineHeight: 1.5,
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={confirmStrike}
                  style={{ flex: 1, background: isEscalated ? "#5a0a0a" : "#721c24", color: "white", border: `1px solid ${isEscalated ? "#ff1a1a" : "#ff4d4d"}`, padding: "10px", cursor: "pointer", fontWeight: "bold", fontSize: "0.8rem", fontFamily: "inherit", letterSpacing: "1px" }}
                >
                  ⚡ ISSUE DEDUCTION → {teamNames[activeTarget]} ({-previewPts}pts)
                </button>
                <button
                  onClick={() => { setSelectedFallacy(null); setJudgeNote(""); }}
                  style={{ background: "transparent", border: "1px solid #2a2a2a", color: "#444", padding: "10px 12px", cursor: "pointer", fontFamily: "inherit" }}
                >
                  ✕
                </button>
              </div>
            </div>
          ) : lastMsg ? (
            <div>
              <div style={{ color: "#ff4d4d", fontWeight: 900, fontSize: "0.85rem", marginBottom: 4 }}>DEDUCTION ISSUED</div>
              <div style={{ color: "#888", fontSize: "0.78rem" }}>{lastMsg}</div>
            </div>
          ) : (
            <div>
              <div style={{ color: "#ff4d4d", fontWeight: 900, fontSize: "0.85rem", marginBottom: 4 }}>SYSTEM ACTIVE</div>
              <div style={{ color: "#444", fontSize: "0.75rem" }}>Select a violation from the Armory below...</div>
            </div>
          )}
        </div>
      </div>

      {/* Category Jump Bar */}
      <div style={{ display: "flex", gap: 4, marginBottom: 10, flexWrap: "wrap" }}>
        {["ALL", ...catList].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              background: selectedCategory === cat ? (cat === "ALL" ? "#1a0000" : `${catColors[cat]}22`) : "transparent",
              border: `1px solid ${selectedCategory === cat ? (cat === "ALL" ? "#ff4d4d" : catColors[cat]) : "#1e1e1e"}`,
              color: selectedCategory === cat ? (cat === "ALL" ? "#ff4d4d" : catColors[cat]) : "#333",
              padding: "3px 9px",
              fontSize: "0.58rem",
              cursor: "pointer",
              fontFamily: "inherit",
              letterSpacing: "1px",
              borderRadius: 2,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Armory + Log */}
      <div style={{ display: "flex", gap: 10, height: 420 }}>
        {/* Armory */}
        <div style={{ flex: 3, display: "flex", flexDirection: "column", background: "#080808", border: "1px solid #1a1a1a" }}>
          <div style={{ background: "#0f0000", color: "#ff4d4d", fontSize: "0.6rem", padding: "6px 10px", letterSpacing: "2px", borderBottom: "1px solid #2a0a0a", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
            <span>VIOLATION ARMORY ({filtered.length})</span>
            <span style={{ color: "#333" }}>AD/SM: -25 · OTHERS: -10 · DDC: -5→-15</span>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "10px 10px 14px" }}>
            {groupedFiltered.map(({ cat, items }) => {
              const color = catColors[cat] ?? "#ff4d4d";
              return (
                <div key={cat} style={{ marginBottom: 16 }}>
                  {/* Category header */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8, marginBottom: 7,
                    paddingBottom: 4, borderBottom: `1px solid ${color}33`,
                  }}>
                    <span style={{ color, fontSize: "0.58rem", fontWeight: 900, letterSpacing: "2px" }}>{cat}</span>
                    <span style={{ color: "#2a2a2a", fontSize: "0.55rem" }}>({items.length})</span>
                    <div style={{ flex: 1, height: 1, background: `${color}22` }} />
                  </div>
                  {/* Buttons */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 5 }}>
                    {items.map((f) => {
                      const rep1 = getRepeat(1, f.id);
                      const rep2 = getRepeat(2, f.id);
                      const isSelected = selectedFallacy?.id === f.id;
                      const hasRepeats = rep1 > 0 || rep2 > 0;
                      return (
                        <button
                          key={f.id}
                          onClick={() => { setSelectedFallacy(f); setLastMsg(null); }}
                          style={{
                            background: isSelected ? `${color}22` : hasRepeats ? "#140800" : "#0d0d0d",
                            border: `1px solid ${isSelected ? color : hasRepeats ? "#5a3000" : "#1e1e1e"}`,
                            color: isSelected ? color : hasRepeats ? "#ff8800" : "#888",
                            padding: "7px 9px",
                            fontSize: "0.7rem",
                            cursor: "pointer",
                            fontFamily: "inherit",
                            textAlign: "left",
                            position: "relative",
                            borderRadius: 2,
                            lineHeight: 1.3,
                            transition: "border-color 0.1s, color 0.1s",
                          }}
                        >
                          <div style={{ fontWeight: 700, fontSize: "0.72rem", marginBottom: 1 }}>{f.name}</div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ color: isSelected ? `${color}99` : "#333", fontSize: "0.56rem", letterSpacing: "0.5px" }}>{f.id}</span>
                            <span style={{ color: f.basePts >= 25 ? "#ff4d4d" : "#555", fontSize: "0.6rem", fontWeight: 900 }}>-{f.basePts}pts</span>
                          </div>
                          {hasRepeats && (
                            <div style={{ display: "flex", gap: 4, marginTop: 2 }}>
                              {rep1 > 0 && <span style={{ background: "#5a2a00", color: "#ff8800", fontSize: "0.48rem", padding: "1px 4px" }}>A ×{rep1}</span>}
                              {rep2 > 0 && <span style={{ background: "#5a2a00", color: "#ff8800", fontSize: "0.48rem", padding: "1px 4px" }}>B ×{rep2}</span>}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strike Log */}
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", background: "#080808", border: "1px solid #1a1a1a", minWidth: 0 }}>
          <div style={{ background: "#0f0000", color: "#ff4d4d", fontSize: "0.6rem", padding: "6px 10px", letterSpacing: "2px", borderBottom: "1px solid #2a0a0a" }}>
            DEDUCTION LOG ({strikeLog.length})
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: 8 }}>
            {strikeLog.length === 0 ? (
              <div style={{ color: "#2a2a2a", fontSize: "0.68rem", textAlign: "center", padding: 20 }}>NO DEDUCTIONS YET</div>
            ) : (
              strikeLog.map((s, i) => (
                <div key={i} style={{ borderBottom: "1px solid #111", paddingBottom: 6, marginBottom: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#ff4d4d", fontSize: "0.6rem", fontWeight: "bold" }}>{s.team}</span>
                    <span style={{ color: s.escalated ? "#ff1a1a" : "#ff6600", fontSize: "0.6rem" }}>-{s.pts}pts</span>
                  </div>
                  <div style={{ color: "#777", fontSize: "0.6rem" }}>{s.fallacy}</div>
                  {s.escalated && <div style={{ color: "#ff6600", fontSize: "0.55rem" }}>ESCALATED ×{s.repeat}</div>}
                  {s.note && <div style={{ color: "#888", fontSize: "0.6rem", fontStyle: "italic", marginTop: 2, borderLeft: "2px solid #2a2a2a", paddingLeft: 5 }}>{s.note}</div>}
                  <div style={{ color: "#2a2a2a", fontSize: "0.55rem" }}>{s.time}</div>
                </div>
              ))
            )}
          </div>
          {/* Score summary */}
          <div style={{ borderTop: "1px solid #1a1a1a", padding: 8 }}>
            {([1, 2] as TeamKey[]).map((t) => (
              <div key={t} style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ color: "#555", fontSize: "0.6rem" }}>{teamNames[t]}</span>
                <span style={{ color: scores[t] < 0 ? "#ff4d4d" : "#888", fontSize: "0.6rem", fontWeight: 900 }}>{scores[t]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 10, color: "#1a1a1a", fontSize: "0.55rem", textAlign: "center", letterSpacing: "2px" }}>
        SUPERVIVE AUT MORI EX · ABSOLUTE DEBATE RULEBOOK · REPETITIONS ARE TRACKED AND PUNISHED
      </div>

      <style>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #721c24; }
        * { box-sizing: border-box; }
        button:hover { opacity: 0.85; }
      `}</style>
    </div>
  );
}

function headerBtn(active: boolean): React.CSSProperties {
  return {
    background: active ? "#1a0000" : "transparent",
    border: `1px solid ${active ? "#ff4d4d" : "#2a2a2a"}`,
    color: active ? "#ff4d4d" : "#555",
    padding: "4px 10px",
    fontSize: "0.6rem",
    cursor: "pointer",
    fontFamily: "inherit",
    letterSpacing: "1px",
  };
}
