import API from './API.js'

export default {
  fetchPosts() {
    return API().get('posts')
  }
}
