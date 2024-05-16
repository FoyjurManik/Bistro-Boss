

function Footer() {
  return (
    <footer className=" py-4">
      <div className="container  mx-auto flex justify-between items-center">
        <div className="flex-1 bg-slate-700 py-2 h-48 px-4 ">
        <h3 className="text-lg text-white flex items-center mt-8 ml-32 justify-center font-bold ">Contact Us</h3>

          {/* Add your contact information here */}
        </div>
        <div className="flex-1 bg-gray-800 py-2 h-48 px-4 ">
          <h3 className="text-lg text-white flex items-center mt-8 mr-32 justify-center font-bold ">Follow Us</h3>
          {/* Add your social media links/icons here */}
        </div>
      </div>
      <div className="flex-1 bg-slate-600 py-2  text-center">
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} Bistro Boss. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
