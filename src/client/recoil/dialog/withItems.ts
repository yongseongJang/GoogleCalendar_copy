import { selector } from "recoil";
import { dialogState } from ".";
import { DIALOG } from "../../enums";

const withItems = selector({
  key: "dialogStateWithItems",
  get: ({ get }) => {
    const dialog = get(dialogState);

    let items: { title: string; url: string }[];
    switch (dialog.dialog) {
      case DIALOG.SET:
        items = [
          { title: "도움말", url: "/" },
          { title: "학습 센터", url: "/" },
          { title: "업데이트", url: "/" },
        ];
        break;
      case DIALOG.SUPPORT:
        items = [
          { title: "설정", url: "/" },
          { title: "휴지통", url: "/" },
        ];
        break;
      case DIALOG.CALENDAR:
        items = [
          { title: "일", url: "/" },
          { title: "주", url: "/" },
          { title: "월", url: "/month" },
          { title: "연도", url: "/year" },
          { title: "일정", url: "/" },
        ];
        break;
      default:
        items = [];
        break;
    }

    return {
      ...dialog.toObject(),
      items,
    };
  },
});

export default withItems;
