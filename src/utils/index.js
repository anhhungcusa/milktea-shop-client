
export const findItemNameByID = (list, id) => {
    let result = list.find((item) => item.id === id);
    if (result) return result.name;
    return 'unknown';
};


export function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;

        var executeFunction = function () {
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(executeFunction, wait);
    };
};

export const formatVND = value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const deleteformatVND = value => value.replace(/\$\s?|(,*)/g, '')

export const checkTimeActive = (start, end , status) => {
    var currentDate = new Date();
		var timeNow = currentDate.getHours();
		if(status === false) return false
		if(timeNow <= end && timeNow >= start ) {
			return true;
		}
		else {
			return false;
		}
}