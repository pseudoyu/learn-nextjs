import { ConnectButton } from "web3uikit"

const Header = () => {
    return (
        <div className="p5 border-b-2">
            A Solidity Contract Lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}

export default Header
