import Vue from 'vue'
import {
  ActionSheet,
  Button,
  Cell,
  CellGroup,
  CountDown,
  Dialog,
  Divider,
  Field,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  Grid,
  GridItem,
  Icon,
  Image,
  ImagePreview,
  Lazyload,
  List,
  NavBar,
  Notify,
  NumberKeyboard,
  Picker,
  Popup,
  PullRefresh,
  Search,
  Skeleton,
  Step,
  Stepper,
  Steps,
  SubmitBar,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  Toast
} from 'vant'

Dialog.setDefaultOptions({
  cancelButtonColor: '#a4a4a4',
  confirmButtonColor: '#ff9603'
})

Vue
  .use(Button)
  .use(Image)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Toast)
  .use(ImagePreview)
  .use(Lazyload)
  .use(Dialog)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Icon)
  .use(List)
  .use(Cell)
  .use(CellGroup)
  .use(PullRefresh)
  .use(Swipe)
  .use(SwipeItem)
  .use(Popup)
  .use(Search)
  .use(Stepper)
  .use(Switch)
  .use(ActionSheet)
  .use(Skeleton)
  .use(Tag)
  .use(Grid)
  .use(GridItem)
  .use(Tab)
  .use(Tabs)
  .use(SubmitBar)
  .use(NumberKeyboard)
  .use(Divider)
  .use(Field)
  .use(CountDown)
  .use(Steps)
  .use(Step)
  .use(Notify)
  .use(Picker)
