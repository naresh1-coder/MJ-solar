const WhatsAppButton = () => {
  const phoneNumber = "918688749050"; 
  const message = "Hello, I need assistance!"; 

  return (
    <div className="fixed bottom-10 right-5 z-50">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center w-14 h-14"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
