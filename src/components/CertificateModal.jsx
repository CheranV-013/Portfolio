import { FiX } from "react-icons/fi";

const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  const isGroup = cert.certificates;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl bg-white shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white"
        >
          <FiX />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-ink-900">{cert.title}</h2>
          <p className="text-sm text-ink-500 mb-6">
            {cert.organization} · {cert.year}
          </p>

          {/* GROUP CERTIFICATIONS */}
          {isGroup ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-auto">
              {cert.certificates.map((item, i) => (
                <div key={i} className="border rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt="certificate"
                    className="w-full object-contain"
                  />
                  <p className="p-4 text-sm text-ink-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <>
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full object-contain max-h-[60vh]"
              />
              <p className="mt-4 text-sm text-ink-600">{cert.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;