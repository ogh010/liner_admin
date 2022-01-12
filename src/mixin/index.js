export default {
    methods: {
        phoneNumber(value){ //전화번호 정규식 하이픈
			value = value.replace(/[^0-9]/g, "");
			return value.replace(
				/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
				"$1-$2-$3"
			);
		}
    }
}