const ContactUs = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-3xl">ContactUs</h1>
      <form>
        <input className="border border-black p-2 m-2" placeholder="name" />
        <input className="border border-black p-2 m-2" placeholder="message" />
        <button className="border border-black p-2 m-2 rounded-lg bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
