const Contact = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="p-6 text-3xl font-bold">Contact Us fill the form</h1>
            <form className="p-6 flex flex-col gap-4">
                <input className="w-[320px] border border-black px-4 py-2 rounded-lg" type="text" placeholder="Name"/>
                <input className="w-[320px] border border-black px-4 py-2 rounded-lg" type="text" placeholder="Message"/>
                <button className="w-[320px] border border-black px-4 py-2 rounded-lg bg-gray-300 text-xl">Submit</button>
            </form>
        </div>
    )
}

export default Contact;