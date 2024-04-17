const Title = ({ text }) => {

    return (
        <h1 className="text-5xl font-bold text-gray-800 max-sm:text-4xl">{text}</h1>
    );
}

const SubTitle = ({ text }) => {

    return (
        <h1 className="text-3xl max-sm:text-2xl font-semibold text-gray-800 ">{text}</h1>
    );
}

const Text = ({ text }) => {

    return (
        <p className="text-lg text-gray-800">{text}</p>
    );
}

const SmallText = ({ text }) => {

    return (
        <p className="text-sm text-gray-800">{text}</p>
    );
}

export { Title, SubTitle, Text}