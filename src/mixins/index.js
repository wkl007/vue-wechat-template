import data from '@/assets/data'

export const listMixin = {
  data () {
    return {
      textData: data,

      isListLoading: false,
      finished: false,
      error: false,
      isPullRefresh: false,
    }
  }
}
