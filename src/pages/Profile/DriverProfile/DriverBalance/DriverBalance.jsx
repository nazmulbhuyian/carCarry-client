

const DriverBalance = ({datas}) => {
    return (
        <div className="border border-gray-300 ml-12 p-12">
            <h1 className="text-2xl font-bold text-gray-800 text-center">Balance</h1>
            <h1 className="text-3xl font-bold text-red-500 text-center mt-2">{datas?.balance} $</h1>
            <button className="block btn btn-primary mt-3 w-40">Deposit</button>
            <button className="block btn btn-primary mt-3 w-40">Withdraw</button>
        </div>
    );
};

export default DriverBalance;