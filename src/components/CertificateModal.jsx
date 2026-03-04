import { FiX } from 'react-icons/fi'

const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 shadow-sm hover:text-ink-900"
          aria-label="Close"
        >
          <FiX />
        </button>
        <div className="max-h-[80vh] overflow-auto">
          <img src={cert.image} alt={cert.title} className="w-full object-contain" />
        </div>
        <div className="border-t border-ink-100 p-5">
          <h3 className="text-base font-semibold text-ink-900">{cert.title}</h3>
          <p className="mt-1 text-sm text-ink-500">
            {cert.organization} · {cert.year}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CertificateModal
