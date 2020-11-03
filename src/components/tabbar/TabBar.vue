<template>
  <Content>
    <div id="tarbar">
      <Layout class="footer">
        <Footer>
          <Row>
            <slot></slot>
          </Row>
        </Footer>
      </Layout>
    </div>
  </Content>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tarbar {
  flex: 1;
  text-align: center;
  font-size: 14px;

  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}
</style>
