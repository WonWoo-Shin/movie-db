import Slider, { Settings } from "react-slick";
import {
  BannerError,
  BannerSlider,
  SliderContainer,
  SliderDots,
} from "../../styles/bannerStyle";
import { SlideArrow } from "./SliderArrow";
import { IItemListResults } from "../../type";
import { SliderItem } from "./SliderItem";
import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../../api";

export const Banner = () => {
  const settings: Settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    appendDots: (dots) => (
      <SliderDots>
        <ul>{dots}</ul>
      </SliderDots>
    ),
    prevArrow: <SlideArrow position={"left"} />,
    nextArrow: <SlideArrow position={"right"} />,
  };

  const { data: trendingData, isError: isTrendingError } =
    useQuery<IItemListResults>({
      queryKey: ["요즘 대세", "day"],
      queryFn: () => getTrending("all", "day"),
      staleTime: 60 * 60 * 1000,
    });

  return (
    <SliderContainer>
      {isTrendingError ? (
        <BannerError>
          <span>
            데이터를 불러오지 못했습니다.
            <br /> 잠시 후 다시 시도해주세요
          </span>
        </BannerError>
      ) : (
        <BannerSlider>
          <Slider {...settings}>
            {trendingData?.results.slice(0, 5).map((result) => (
              <SliderItem key={result.id} {...result} />
            ))}
          </Slider>
        </BannerSlider>
      )}
    </SliderContainer>
  );
};
