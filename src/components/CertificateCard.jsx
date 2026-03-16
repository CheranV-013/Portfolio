const CertificateCard = ({ cert, onView }) => {

  const previewImage =
    cert.cover || cert.image || cert.certificates?.[0]?.image

  return (
    <div className="card flex h-full flex-col overflow-hidden">
      <div className="h-44 w-full overflow-hidden bg-ink-50">
        <img
          src={previewImage}
          alt={cert.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-ink-900">
          {cert.title}
        </h3>

        <p className="mt-2 text-sm text-ink-500">
          {cert.organization}
        </p>

        <p className="mt-1 text-xs font-medium text-ink-500">
          {cert.year}
        </p>

        {cert.certificates && (
          <p className="mt-1 text-xs text-blue-500">
            {cert.certificates.length} Certifications
          </p>
        )}

        <button
          onClick={() => onView(cert)}
          className="mt-4 inline-flex items-center justify-center rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 hover:border-ink-300 hover:text-ink-900"
        >
          {cert.certificates ? "View Certifications" : "View Certificate"}
        </button>
      </div>
    </div>
  )
}

export default CertificateCard