const getStoredJobApplication = () => {
    const storedJobAplication = localStorage.getItem('job-aplications');

    if (storedJobAplication) {
        return JSON.parse(storedJobAplication);
    }
    return [];
}

const saveJobAplication = (id) => {
    const storedJobAplications = getStoredJobApplication();
    const exists = storedJobAplications.find(jobId => jobId === id);

    if(!exists){
        storedJobAplications.push(id);
        localStorage.setItem('job-aplications', JSON.stringify(storedJobAplications))
}

}

export {getStoredJobApplication, saveJobAplication}