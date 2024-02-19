const fetchData = async (link: string) => {
    try {
        const res = await fetch(link);
        if (!res.ok) {
            throw new Error('No network response');
        } 
        const data = await res.json();
        return data;
    } 
    catch (error) {
        // TODO: correct typing and remove ignore
        // @ts-ignore
        return error.message;
    };
};

export default fetchData;