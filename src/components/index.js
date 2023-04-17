import Slider from "./Slider/index.vue";
import Button from "./Button/index.vue";
import Count from "./Count/index.vue";
import Checkbox from "./Checkbox/index.vue";

export const SsSlider = Slider;
export const SsButton = Button;
export const SsCount = Count;
export const SsCheckbox = Checkbox;

const SsUI = {
  install(app) {
    app.component(`SsSlider`, Slider);
    app.component(`SsButton`, Button);
    app.component(`SsCount`, Count);
    app.component(`SsCheckbox`, Checkbox);
  },
};

export default SsUI;
