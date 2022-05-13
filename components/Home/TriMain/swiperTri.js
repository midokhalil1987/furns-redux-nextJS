import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { DataTri } from "./dataTri";

const SwiperTri = () => {
  return (
    <div className="sc-bSFUlv RNogV">
      <Swiper
        speed={600}
        slidesPerView={1}
        breakpoints={{
          530: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          772: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {DataTri.map((dt, idx) => (
          <SwiperSlide key={idx}>
            <article className="sc-cHjwLt eDlRzi">
              <a href={dt.link}>
                <div
                  style={{
                    display: "block",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    margin: "0px",
                  }}
                >
                  <img src={dt.imgSrc} alt={dt.imgAlt} />
                </div>
              </a>
              <div className="sc-hYZPxA gvQBaH">
                <h2 className="sc-tkKUh cnLVRM">
                  <a href={dt.link}>{dt.title}</a>
                </h2>
                <div className="sc-dRPjRY fZeUJn">
                  By <a href={dt.link}>{dt.auther}</a>
                  <a href={dt.link}>{dt.date}</a>
                </div>
                <p>{dt.descrip}</p>
                <a href={dt.link} className="sc-eFuaqX gTZRQR btn-read">
                  Read More
                </a>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperTri;
