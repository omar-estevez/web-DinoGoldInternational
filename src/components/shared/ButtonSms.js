import '../styles/ButtonSms.scss';

export const ButtonSms = ({
    text = "💬 TEXT TO BOOK",
    smsText = "+1832XXXXXXX?body=Hi,%20I'd%20like%20to%20book%20a%20mobile%20car%20wash.%20Vehicle%20type:%20_____%20Location%20in%20Houston:%20_____%20Preferred%20date%20%26%20time:%20_____"
}) => {
    return (
        <a class="btn-book" href={'sms:' + smsText}>
            {text}
        </a>
    )
}