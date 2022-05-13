import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { secData } from "./secData";

const SecSwiper = () => {
  return (
    <>
      <section className="sc-ksXiFW kwSNXl">
        <div className="sc-jONnzC fooUHR container">
          <div className="sc-bSFUlv jwhoTA">
            <Swiper
              breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                991: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1300: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
            >
              {secData.map((sdata, idx) => (
                <SwiperSlide
                  key={idx}
                  style={{ marginRight: "30px", width: "150px" }}
                >
                  <Link href={sdata.link}>
                    <a className="sc-kHNMIv bGxvHY">
                      <div className="sc-cVksOY IoeuA">
                        <div
                          style={{
                            display: "inline-block",
                            maxWidth: "100%",
                            overflow: "hidden",
                            position: "relative",
                            boxSizing: "border-box",
                            margin: "0px",
                          }}
                        >
                          <img src={sdata.imgSrc} alt={sdata.imgAlt} />
                        </div>
                        <h4 className="sc-dkaWRx iCBDgS">{sdata.title}</h4>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecSwiper;
