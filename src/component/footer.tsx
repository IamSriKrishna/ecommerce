import Link from "next/link";
const social = [
  {
    id: 1,
    img: "https://cdn-icons-png.freepik.com/256/124/124010.png?semt=ais_hybrid",
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    url: "https://www.instagram.com/_iamsrikrishna_/",
  },
  {
    id: 3,
    img: "data:image/png;base64,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",
    url: "https://x.com/?lang=en",
  },
  {
    id: 4,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUKZsL///8AZME7eMgAWb7i6fUAXL/Az+oAYsFjj9B1m9QAYMBGgswAVr0AXb8AWr5ZjdBWh80ZbMTO3PCzx+drl9T2+f2Ssd7G1u0dbsXF1e3w9fs2dsfl7ffV4fIocsaApNmowOSMrNyrw+Wbt+AAUryFqNr2AL+0AAADz0lEQVR4nO3ca1+qMACAcZiA5ATMW+a98vT9P+LROkXiNruMLXae/2v1xyOy6QCjCAAAAAAAAAAAAAAAAAAAALBGnPjeiPbkZSJ36/W4qmSQlbIYTTfxyXx72CXBNYpkv4o/mAwDayx7m7hhWoWUWM2afUebcTiJ5UAReDweo1AS5VAZeNyLgXxQhZxrCo/Hou+NsyJ70AXGcS+EnSgifWC8SHxvngXyzlAYhzCeJqmp8FH63r4fE8IUGC+6P9YI3VTxatP9AzFXz/bvCt8b+GNyT2HX5aov3UEVip4xMO3+SBNlxsJp6Xv7fq5amApn3Z/xzQfivAzgW1tUrPSFDwF8SM1zfiDLisUk5KPwREjN5/QpgKnilbhXrmP0uz/bvxPR9jLwEFDgacm7+Ut/c5v53ijLSvHw4WhMB0Xue4usE2U1vOtv03Qy3e+S8PpeCJlVSZKVgcyCAIDfT+SyrI6Ok0+As4+QVbGbHabLxWTRf7qb7YrMa6XIdZpbpX3k2QPzSuyXjV8rk8dd4i1SjG90bs+3SQx1D7yvH5gnt0vlr830ufK06mNYMW2cl8nUm370/laIYmQ4W3covSwaGAob68FZ/1phudOuiLyYDwoPu9FeoSiejX0nE+H+Z4u1QiHNO/DVfOh8hdJWYT42LLx+NHN9XtlSoVxrL8tpGjheILFTqFmvU7txO6RaKZT5Jz+ir9xeiWSl8M9nBpnayunVqzYKh9eniXNTl8vpVvbhFwOP74nDadFG4RdGmbeXdriibqPwG2budqKnQofXQHgqjIfOhlNfhX1nX958FcaZq53ordDZOXRvhVNXX8DtF87TNP3EDLlyNZpaLlwOxkWSJIWYXX20q4vIrRY+jat/S4tCVmPjBWXuDkSLhave2V02ojDeBxAfHK1n2CvcZs1vYhcXQJxZOhpqrBWqvofpr7fSPOE3F84vTgKcXvze9AxHvy9sFY6U40Zleo6jMxmWChfqHWK8n8PRdGGpULe4lBiWqHZdKtzqRg3TkxwtudkpfNbN3tKwSNWpQu0hJQyrVF0q3GgHftPNcV0qXOp/sBdhFBou6jcMpl0qNNxrmlz8XUMnC/fBFw7067uGG40ptITCGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwlqAhc1/4NHfx2Qq9H7lXhT1dNaNf1HqDc/djt4YrroXa+3rtx1Wb4PWlQfq/zPrWy8PAAAAAAAAAAAAAAAAAAAA4D/0F5lQSZ+5G/qbAAAAAElFTkSuQmCC",
    url: "https://www.linkedin.com/in/sri-krishna-m/",
  },
  {
    id: 5,
    img: "https://cdn-icons-png.flaticon.com/256/1384/1384060.png",
    url: "https://youtu.be/TDxfWknBSLw",
  },
];
const payment = [
  {
    id: 1,
    img: "https://w7.pngwing.com/pngs/321/928/png-transparent-discover-payment-method-icon.png",
  },
  {
    id: 2,
    img: "https://w7.pngwing.com/pngs/747/966/png-transparent-skrill-payment-method-icon.png",
  },
  {
    id: 3,
    img: "https://w7.pngwing.com/pngs/180/94/png-transparent-logo-paypal-payment-system-money-paypal-blue-text-trademark.png",
  },
  {
    id: 4,
    img: "https://w7.pngwing.com/pngs/648/903/png-transparent-mastercard-logo-logo-payment-visa-mastercard-paypal-mastercard-icon-text-service-mobile-payment.png",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxMMO5TypTIFWiedWM_x7qpZCsa02-wFWyQ&s",
  },
];
const dev = "</>";
const Footer = () => {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-gray-100 text-sm mt-24">
      {/*Top*/}
      <div className="flex justify-center gap-24">
        {/*Left*/}
        <div className="w-ful md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Peak~Tree</div>
          </Link>
          <p>
            117, 1st Ln, CS Colony, Indira Nagar, Adyar, Chennai, Tamil Nadu
            600020
          </p>
          <span className="font-semibold">srik9585a@gmail.com</span>
          <span className="font-semibold">+91 9345927994</span>
          <div className="flex gap-6">
            {social.map((soc) => (
              <Link key={soc.id} href={soc.url}>
                <img
                  src={soc.img}
                  width={24}
                  height={24}
                  className="cursor-pointer rounded-md h-fit object-fill"
                />
              </Link>
            ))}
          </div>
        </div>
        {/*Centre*/}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>About Us</Link>
              <Link href={""}>Careers</Link>
              <Link href={""}>Affiliates</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>New Arrivals</Link>
              <Link href={""}>Accessories</Link>
              <Link href={""}>Men</Link>
              <Link href={""}>Women</Link>
              <Link href={""}>All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">Help</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>Customer Service</Link>
              <Link href={""}>My Account</Link>
              <Link href={""}>Find a Store</Link>
              <Link href={""}>Legal & Privacy</Link>
              <Link href={""}>Gift Card</Link>
            </div>
          </div>
        </div>
        {/*Right*/}
        <div className="w-ful md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className=" font-medium text-lg">Subscribe</h1>
          <p>
            Be the first to get the latest news about trends, promotion, and
            much more!
          </p>
          <div className="flex">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-4 w-3/4 outline-none"
            />
            <button className="w-1/4 bg-mette text-white">Join</button>
          </div>
          <span>Secure Payment</span>
          <div className="flex justify-between">
            {payment.map((soc) => (
              <Link key={soc.id} href="" className="flex justify-between">
                <img src={soc.img} width={40} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/*Bottom*/}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
        <div className="">© 2024 Peak~Tree</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United State | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">₹ INR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
