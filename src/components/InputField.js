export default function InputField({ htmlFor, value, handleChange, label }) {
    return (
        <div className="input-field">
            <label htmlFor={htmlFor}>{label}</label>
            <input
                type="text"
                id={htmlFor}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}
