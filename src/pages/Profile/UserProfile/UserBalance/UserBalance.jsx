

const UserBalance = ({data}) => {
    return (
        <div className="p-12 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-800 text-center">Balance</h1>
            <h1 className="text-3xl font-bold text-red-500 text-center mt-2">{data?.balance} $</h1>
            <button className="block btn btn-primary mt-3 w-40">Deposit</button>
            <button className="block btn btn-primary mt-3 w-40">Withdraw</button>
        </div>
    );
};

export default UserBalance;