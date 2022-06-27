import { selector } from "recoil";
import { dialogState } from ".";
import { DIALOG } from "../../enums";
import { history } from "../../utils/history";

const withItems = selector({
  key: "dialogStateWithItems",
  get: ({ get }) => {
    const dialog = get(dialogState);

    let items: { title: string; handleClickItem: () => void }[];
    switch (dialog.dialog) {
      case DIALOG.SET:
        items = [
          {
            title: "도움말",
            handleClickItem: () => {
              return;
            },
          },
          {
            title: "학습 센터",
            handleClickItem: () => {
              return;
            },
          },
          {
            title: "업데이트",
            handleClickItem: () => {
              return;
            },
          },
        ];
        break;
      case DIALOG.SUPPORT:
        items = [
          {
            title: "설정",
            handleClickItem: () => {
              return;
            },
          },
          {
            title: "휴지통",
            handleClickItem: () => {
              return;
            },
          },
        ];
        break;
      case DIALOG.CALENDAR:
        items = [
          {
            title: "일",
            handleClickItem: () => {
              history.replace("/");
            },
          },
          {
            title: "주",
            handleClickItem: () => {
              history.replace("/");
            },
          },
          {
            title: "월",
            handleClickItem: () => {
              history.replace("/month");
            },
          },
          {
            title: "연도",
            handleClickItem: () => {
              history.replace("/year");
            },
          },
          {
            title: "일정",
            handleClickItem: () => {
              history.replace("/");
            },
          },
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
