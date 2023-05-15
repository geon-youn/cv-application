export default function Card({ editing, handleAdd, handleRemove, handleMove, top, bot, children }) {
    return (
        <>
            {children}
            {editing ? (
                <>
                    <button
                        onClick={() => {
                            handleAdd(true);
                        }}
                    >
                        Add Above
                    </button>
                    <button
                        onClick={() => {
                            handleAdd(false);
                        }}
                    >
                        Add Below
                    </button>
                    <button
                        onClick={() => {
                            handleRemove();
                        }}
                    >
                        Remove
                    </button>
                    <button
                        onClick={() => {
                            handleMove(true);
                        }}
                        disabled={top}
                    >
                        Move Up
                    </button>
                    <button
                        onClick={() => {
                            handleMove(false);
                        }}
                        disabled={bot}
                    >
                        Move Down
                    </button>
                </>
            ) : null}
        </>
    );
}
