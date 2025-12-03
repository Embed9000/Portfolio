export default function ModalWrapper({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 
        flex justify-center items-center 
        z-[9999] p-4 
        bg-transparent 
        backdrop-blur-md    /* AICI E BLURUL */
      "
      onClick={onClose}
    >
      <div
        className="
          bg-gray-900 
          rounded-xl p-4 
          max-h-[90vh] overflow-y-auto 
          w-full max-w-5xl 
          border border-purple-600 
          shadow-xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
