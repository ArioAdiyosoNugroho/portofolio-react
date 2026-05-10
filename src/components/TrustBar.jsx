export default function TrustBar() {
  const stats = [
    { value: '50+', label: 'Klien Puas', color: 'text-brand-dark' },
    { value: '3+',   label: 'Tahun Pengalaman', color: 'text-primary' },
    { value: '50+', label: 'Proyek Selesai', color: 'text-brand-dark' },
  ]

  return (
    <section className="py-14 bg-brand-light border-y border-brand-border" aria-label="Statistics">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label, color }) => (
            <div key={label}>
              <div className={`font-display text-4xl font-extrabold mb-1 ${color}`}>{value}</div>
              <div className="text-sm text-brand-grey">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}