

const Footer = () => {
    return (
        <div className=" bg-purple-600 py-10">
            <footer className="footer container mx-auto text-white">
                <nav>
                    <header className="text-xl font-semibold">Services</header> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <header className="text-xl font-semibold">Company</header> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <header className="text-xl font-semibold">Legal</header> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </nav> 
                <form>
                    <header className="text-xl font-semibold">Newsletter</header> 
                    <fieldset className="form-control w-80">
                    <div className="relative">
                        <input type="text" placeholder="enter your email" className="input input-bordered w-full pr-16 text-black" /> 
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;