import whiteLogo from "/assets/images/white-logo.png";

export default function HeaderLogo() {

    return(
      // parent container
        <a href="#top"
        className={`text-sm flex items-center font-semibold`}>
            {/* icon */}
            <img
              className="w-8 mr-2
            md:w-10"
              src={whiteLogo}
              alt=""
            />
            {/* end icon */}

            {/* name */}
            <p
              className="text-xl
              md:text-2xl
              lg:text-3xl"
            >
              Fadli_
            </p>
            {/* end name */}
        </a>
        // end parent container
    );
}
