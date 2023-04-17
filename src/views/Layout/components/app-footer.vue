<script setup></script>

<template>
  <footer class="app_footer">
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>價格便宜</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>到貨迅速</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>品項齊全</span>
          </a>
        </div>
        <div class="copyright">
          <a href="javascript:;">關於我們</a>
          <a href="javascript:;">售後服務</a>
          <a href="javascript:;">配送</a>
          <a href="javascript:;">商務合作</a>
          <a href="javascript:;">幫助中心</a>
          <p>CopyRight © Shoe Shop</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;

  .extra {
    background-color: #333;
  }

  .slogan {
    height: 178px;
    line-height: 58px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;

    a {
      height: 58px;
      line-height: 58px;
      color: #fff;
      font-size: 28px;
      cursor: default;

      i {
        font-size: 50px;
        vertical-align: middle;
        margin-right: 10px;
        font-weight: 100;
      }

      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }
  .copyright {
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-top: 10px;
    }

    a {
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;
      cursor: default;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
