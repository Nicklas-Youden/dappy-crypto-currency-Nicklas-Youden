import "./Hero.scss";
export default function Hero(){
  return(
    <>
      <div className="hero__saleText">

      <h1 className="saleText__title">
        Create your first decentrlized wallet
      </h1>
      <p className="saleText__subTitle">The easiest way to mange multiple cryptocurrenct assets</p>
      <a className="saleText__callToAction" href="/"
      // eslint-disable-next-line
      onClick={() => gtag("event", "select_content", { "content_type": "createWalletButton", "test-type": "A" })}
      >create wallet</a>
      </div>
      <img className="hero__walletImage"src="./images/wallet.png" alt=""/>
    </>
  )
}