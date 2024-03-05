import dayjs from "dayjs"


let instance;
class DateService{
    constructor() {
        if (instance) {
            throw new Error("New instance cannot be created!!");
        }

        instance = this;
    }

    /**
     * Formats date
     * @param  date   date object to be formatted
     * @returns string a formatted date string
     */
    getFormattedDate(date) {
        return dayjs(date).format('MMM DD, YY');
    }

    /**
     *  Returns a boolean stating wether date object passed in is today
     * @param  date      date object to be analyzed
     * @returns boolean describes wether param is todays date
     */
    isDateToday(date) {
        const formattedDate = this.getFormattedDate(date);
        const today = this.getFormattedDate(new Date());

        if (formattedDate === today) {
            return true;
        }

        return false;
    }

}

const dateService = Object.freeze(new DateService());

export default dateService;