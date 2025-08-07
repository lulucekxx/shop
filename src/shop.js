import { useState } from 'react';

const rewards = [
  { id: 1, name: '🎁 Dáreček', cost: 1 },
  { id: 2, name: '🧸 Hračka', cost: 1 },
  { id: 3, name: '🍦 Zmrzlinka', cost: 1 },
  { id: 4, name: '👑 Princezna lekce', cost: 1 },
  { id: 5, name: '🏅 Medaile', cost: 1 },
  { id: 6, name: '🖼️ Obrázek na zeď', cost: 1 },
];

export default function RewardShop() {
  const [points, setPoints] = useState(3);
  const [cupboard, setCupboard] = useState([]);

  const handleBuy = (reward) => {
    if (points >= reward.cost) {
      setPoints(points - reward.cost);
      setCupboard([...cupboard, reward]);
    } else {
      alert("Nemáš dost hvězdiček!");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: 'auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>🌟 Můj Kouzelný Obchůdek</h1>
      <div style={{ textAlign: 'center', margin: '1rem 0' }}>Hvězdičky: <strong>{points}</strong></div>

      <h2>🛍️ Odměny:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {rewards.map(reward => (
          <div key={reward.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10, width: 120, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem' }}>{reward.name}</div>
            <div>{reward.cost} ⭐</div>
            <button onClick={() => handleBuy(reward)} style={{ marginTop: 10 }}>Koupit</button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 30 }}>🎒 Moje Skříňka:</h2>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {cupboard.length === 0 ? <p>Nic zatím nemáš.</p> : cupboard.map((item, index) => (
          <div key={index} style={{ fontSize: '2rem' }}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}