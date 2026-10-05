export function Education() {
  const educationItems = [
    {
      institution: 'KL University',
      degree: 'B.Tech CSE',
      period: '2024 – 2028',
      score: '9.5 CGPA',
      location: 'Guntur, AP',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate',
      period: '2022 – 2024',
      score: '94%',
      location: 'Visakhapatnam, AP',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-xs tracking-widest text-black/50 uppercase font-mono border-b border-black/10 pb-2">
        <span>Education</span>
        <span>Academic Foundations</span>
      </div>

      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <div key={index} className="group">
            <div className="flex items-baseline justify-between mb-1">
              <h4 className="text-base sm:text-lg font-medium text-black tracking-tight">
                {item.institution}
              </h4>
              <span className="text-xs font-mono text-black/60 tabular-nums">
                {item.period}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-black/70">
              <span>{item.degree}</span>
              <span className="font-medium text-black bg-neutral-100 px-2 py-0.5 rounded text-xs tabular-nums">
                {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
