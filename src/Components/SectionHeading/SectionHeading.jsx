

const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className="py-10 text-center w-2/12 mx-auto">
            <p className="mb-2 capitalize">{subHeading}</p>
            <h3 className="border-y-2 py-2 uppercase text-3xl font-bold">{heading}</h3>
        </div>
    );
};

export default SectionHeading;