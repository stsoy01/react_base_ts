
const CurrentSectionService = () => {

    return {
        getSection: function () {
            return localStorage.getItem('currentSection') ?? 'all'
        },

        setSection: function (section: string): void {
            localStorage.setItem('currentSection', section);
        }
    }
}

export default CurrentSectionService;