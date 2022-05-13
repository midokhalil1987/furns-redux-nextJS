import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import { dataSwiper } from "./dataSwiper";

const MainSwiper = () => {
  return (
    <>
      <div className="sc-bSFUlv eMQTUa">
        <Swiper
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          {dataSwiper.map((data) => (
            <SwiperSlide key={data.imgAlt}>
              <div className="sc-hkwmXC cmnBBb">
                <div className="sc-jONnzC fooUHR container">
                  <div className="sc-hTZgZg bnjsxB align-items-center row">
                    <div className="sc-bqyKOL eUqWxS order-1 col-sm-7 col-xl-6">
                      <div className="sc-jifHHV enBukJ slide-content">
                        <h4 className="sc-gHfsNP ckkyHR">{data.title}</h4>
                        <h2 className="sc-dkAqVg hMBHNl">{data.subTitle}</h2>
                        <p>{data.descrip}</p>
                        <a
                          href="/shop"
                          color="white"
                          className="sc-eFuaqX cBTZnj mt-4 mt-md-5"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="sc-bqyKOL eUqWxS col-sm-5 order-sm-1 col-xl-6 order-xl-1">
                      <div className="sc-JAcba">
                        <img src={data.imgSrc} alt={data.imgAlt} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MainSwiper;
