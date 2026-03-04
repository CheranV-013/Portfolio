const CertificateCard = ({ cert, onView }) => {
  return (
    <div className="card flex h-full flex-col overflow-hidden">
      <div className="h-44 w-full overflow-hidden bg-ink-50">
        <img src={cert.image} alt={cert.title} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-ink-900">{cert.title}</h3>
        <p className="mt-2 text-sm text-ink-500">{cert.organization}</p>
        <p className="mt-1 text-xs font-medium text-ink-500">{cert.year}</p>
        <button
          onClick={() => onView(cert)}
          className="mt-4 inline-flex items-center justify-center rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-ink-300 hover:text-ink-900"
        >
          View Certificate
        </button>
      </div>
    </div>
  )
}

export default CertificateCard
