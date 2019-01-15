<template>
  <div class="onlinePrint">
    <div class="selectPrinter">
      <select-printer></select-printer>
    </div>
    <main id="container">
      <!-- 模型预览与相关信息显示 -->
      <div class="container-fluid" id="prev">
        <div class="row">
          <div class="col-md-7 prev_left clearfix">
            <div id="canvas3d" ref="previewWrapper"></div>
            <div class="file-box">
              <form id="uploadForm">
                <input type="file" name="file" class="file" id="fileField">
              </form>
            </div>
          </div>
          <div class="col-md-5 prev_right">
            <ul>
              <li>
                <img src="../assets/images/cloud.png" alt class="img-responsive">
                <span>打印机类型:</span>&nbsp;
                <span>Printors i3</span>
              </li>
              <li>
                <img src="../assets/images/locate.png" alt class="img-responsive">
                <span>打印机地点:</span>&nbsp;
                <span>昆明理工大学呈贡校区综合性体育运动馆</span>
              </li>
              <li>
                <img src="../assets/images/file.png" alt class="img-responsive file_png">
                <span>文件名:</span>&nbsp;
                <span class="fileName">xxx.stl</span>
              </li>
              <li>
                <img
                  src="../assets/images/resize-full-alt.png"
                  alt
                  class="img-responsive resize_png"
                >
                <span>尺寸大小:</span>&nbsp;
                <span class="x_size">0mm x</span>
                <span class="y_size">0mm x</span>
                <span class="z_size">0mm</span>
              </li>
              <li>
                <img src="../assets/images/pla.png" alt class="img-responsive pla_png">
                <span>耗材:</span>&nbsp;
                <div class="select">
                  <select>
                    <option>PLA</option>
                  </select>
                </div>
                <span class="price">*0.8元/g</span>
              </li>
              <li>
                <img src="../assets/images/size.png" alt class="img-responsive size_png">
                <span>模型比例:</span>&nbsp;
                <div class="pro_bar">
                  <div class="progress">
                    <div class="progress-bar"></div>
                  </div>
                  <a class="pro_control" href="javascript:;"></a>
                  <div id="progress_value">100%</div>
                </div>
              </li>
              <li>
                <img src="../assets/images/type.png" alt class="img-responsive type_png">
                <span>打印模式:</span>&nbsp;
                <div class="pri_type">
                  <div class="btn-group" role="group" aria-label="...">
                    <button type="button" class="btn btn-default selected">快速</button>
                    <button type="button" class="btn btn-default">标准</button>
                    <button type="button" class="btn btn-default">品质</button>
                    <button type="button" class="btn btn-default">自定义</button>
                  </div>
                </div>
              </li>
              <li>
                <img src="../assets/images/number.png" alt class="img-responsive number_png">
                <span>数量:</span>&nbsp;
                <div class="btn-group number" role="group" aria-label="...">
                  <span class="down">-</span>
                  <span class="num">1</span>
                  <span class="add">+</span>
                </div>
              </li>
              <li>
                <img src="../assets/images/time.png" alt class="img-responsive time_png">
                <span>预估时间:</span>&nbsp;
                <span class="time">2 h 30 min</span>
              </li>
              <li>
                <img src="../assets/images/price.png" alt class="img-responsive price_png">
                <span>总价:</span>&nbsp;
                <span class="money">￥0</span>
              </li>
              <li class="text-center operation">
                <button class="btn btn-success btn-sm op_btn op_btn1 uploadFile">上传文件</button>
                <button class="btn btn-success btn-sm op_btn op_btn2 joinQueue">加入队列</button>
                <button class="btn btn-success btn-sm op_btn op_btn3 printing">立即打印</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <shopcar></shopcar>
  </div>
</template>

<script>
import shopcar from "../components/shopcar/shopcar";
import SelectPrinter from "../components/SelectPrinter/SelectPrinter";
import Vue from "vue";
//相机的相应参数
let container;
let camera, cameraTarget, scene, helper;
const perspectiveAngle = 45;
const cameraPosX = 900;
const cameraPosY = 1200;
const cameraPosZ = 2400;
const cameraTargetX = -100;
const cameraTargetY = -500;
const cameraTargetZ = 800;
const upVectorX = 0;
const upVectorY = 50;
const upVectorZ = 0;
const cameralScale = 0.5;
const [ratioX, ratioY, ratioZ] = [1, 1, 1];
export default {
  name: "onlinePrint",
  data() {
    return {
      //预览图的宽高
      previewWidth: 0,
      previewHeight: 0,
      //加载模型所需的文件信息
      stlFile: "",
      //模型大小参数
      module_x: 0,
      module_y: 0,
      module_z: 0,
      renderer: null
    };
  },
  mounted() {
    // DOM 更新了
    this.previewWidth = this.$refs.previewWrapper.clientWidth;
    this.previewHeight = this.$refs.previewWrapper.clientHeight;
    this.threeStart();
  },
  methods: {
    /**
     * 读取文件信息的函数,刷新视图
     */
    readURL(input) {
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
          //得到文件名(base64编码)
          this.stlFile = e.target.result;
          this.$refs.previewWrapper.removeChild(renderer.domElement);
          threeStart();
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    /**
     *
     */
    //加载模型初始化函数
    init() {
      camera = new THREE.PerspectiveCamera(perspectiveAngle, 1, 1, 10000);
      camera.position.set(cameraPosX, cameraPosY, cameraPosZ);
      camera.up.set(upVectorX, upVectorY, upVectorZ);
      cameraTarget = new THREE.Vector3(
        cameraTargetX,
        cameraTargetY,
        cameraTargetZ
      );
      camera.lookAt(cameraTarget);
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0xffffff, 0, 9000);

      // 实例stlloader
      var loader = new THREE.STLLoader();
      loader.load("plane.stl", geometry => {
        //材料颜色
        var material = new THREE.MeshPhongMaterial({
          color: 0x008080,
          specular: 0xc0c0c0,
          shininess: 200
        });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.scale.set(1, 1, 1);
        // mesh.rotation.x = -0.5 * Math.PI;
        scene.add(mesh);

        //计算模型尺寸
        geometry.computeBoundingBox();
        var boundbox = geometry.boundingBox;
        //模型尺寸
        this.module_x = (boundbox.max.x - boundbox.min.x).toFixed(0);
        this.module_y = (boundbox.max.y - boundbox.min.y).toFixed(0);
        this.module_z = (boundbox.max.z - boundbox.min.z).toFixed(0);

        //对模型位置进行判断
        if (boundbox.min.y >= 0) {
          mesh.position.set(0, -boundbox.min.y - 600, 0);
        } else {
          mesh.position.set(0, -boundbox.min.y - 600, 0);
        }
        scene.add(camera);
      });

      // 增加lights
      scene.add(new THREE.AmbientLight(0x333333));
      this.addDirectionalLight(-1, 1, 1, 0xffffff, 1.0);
      this.addDirectionalLight(1, -1, -1, 0xffffff, 1);

      //网格
      var helper = new THREE.GridHelper(500, 50);
      helper.setColors(scene.fog);
      helper.position.set(0, -600, 0);
      scene.add(helper);

      //x,y,z轴
      var axisHelper = new THREE.AxisHelper(1000);
      axisHelper.position.set(-500, -600, -500);
      scene.add(axisHelper);
      var axisHelper2 = new THREE.AxisHelper(1000);
      axisHelper2.position.set(500, -600, -500);
      axisHelper2.rotation.y = -70.6855;
      scene.add(axisHelper2);

      var axisHelper3 = new THREE.AxisHelper(1000);
      axisHelper3.position.set(-500, -600, 500);
      axisHelper3.rotation.y = 70.6855;
      scene.add(axisHelper3);

      var axisHelper4 = new THREE.AxisHelper(1000);
      axisHelper4.position.set(500, -600, 500);
      axisHelper4.rotation.y = 141.371;
      scene.add(axisHelper4);

      var axisHelper5 = new THREE.AxisHelper(1000);
      axisHelper5.position.set(-500, 800, -500);
      axisHelper5.rotation.z = -70.6855;
      scene.add(axisHelper5);

      var axisHelper6 = new THREE.AxisHelper(1000);
      axisHelper6.position.set(500, 800, -500);
      axisHelper6.rotation.y = -70.6855;
      axisHelper6.rotation.z = -70.6855;
      scene.add(axisHelper6);

      var axisHelper7 = new THREE.AxisHelper(1000);
      axisHelper7.position.set(500, 800, 500);
      axisHelper7.rotation.y = -141.371;
      axisHelper7.rotation.z = -70.6855;
      scene.add(axisHelper7);

      var axisHelper8 = new THREE.AxisHelper(1000);
      axisHelper8.position.set(-500, 800, 500);
      axisHelper8.rotation.y = 70.6855;
      axisHelper8.rotation.z = -70.6855;
      scene.add(axisHelper8);

      // renderer渲染
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setClearColor(0xfafafa);
      this.renderer.setSize(this.previewWidth, this.previewHeight);
      this.renderer.gammaInput = true;
      this.renderer.gammaOutput = true;
      this.renderer.shadowMapEnabled = true;
      this.renderer.shadowMapCullFace = THREE.CullFaceBack;
      this.$refs.previewWrapper.appendChild(this.renderer.domElement);
      // orbit control鼠标控制
      let control = new THREE.OrbitControls(camera, this.renderer.domElement);
      // let control = new THREE.OrbitControls(camera);

      control.enablePan = true;
    },
    addDirectionalLight(x, y, z, color, intensity) {
      var directionalLight = new THREE.DirectionalLight(color, intensity);
      directionalLight.position.set(x, y, z);
      scene.add(directionalLight);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.render();
    },
    render() {
      this.renderer.render(scene, camera);
    },
    threeStart() {
      this.init();
      this.animate();
    }
  },
  components: {
    shopcar,
    SelectPrinter
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/style/mixin/mixin.less");
#container {
  width: 100%;
  // 模型预览及设置样式
  #prev {
    padding: 0 40px;
    margin-bottom: 20px;
    height: 100%;
    .prev_left {
      margin-top: 40px;
      background-color: #fafafa;
      height: 620px;
      margin-bottom: 40px;
      #canvas3d {
        width: 100%;
        height: 100%;
      }
      #uploadForm {
        display: none;
      }
    }
    .prev_right {
      margin-top: 40px;
      // height: 300px;
      li {
        list-style: none;
        background-color: #fff;
        font-size: 20px;
        line-height: 50px;
        img {
          display: inline-block;
          width: 45px;
          height: 45px;
        }
        .file_png,
        .size_png {
          width: 35px;
          height: 35px;
          margin-left: 6px;
          margin-right: 4px;
        }
        .resize_png,
        .pla_png,
        .number_png,
        .time_png,
        .price_png {
          width: 30px;
          height: 30px;
          margin-left: 9px;
          margin-right: 5px;
        }
        .type_png {
          width: 39px;
          height: 39px;
          margin-left: 5px;
        }
        span {
          display: inline-block;
          vertical-align: middle;
        }
        .select {
          display: inline-block;
          height: 29px;
          width: 80px;
          vertical-align: middle;
          position: relative;
          &:after {
            content: "";
            width: 14px;
            height: 18px;
            background: url(../assets/images/arrow.png) no-repeat center;
            background-size: 100%;
            position: absolute;
            right: 6px;
            top: 6px;
            z-index: 99;
          }
        }
        select {
          width: 100%;
          padding: 0 9px;
          vertical-align: top;
          border-radius: 5px;
          border: none;
          background-color: #fafafa;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          line-height: 29px;
        }
        .price {
          font-size: 16px;
          margin-left: 10px;
        }
        .pro_bar {
          width: 350px;
          height: 3px;
          line-height: 25px;
          position: relative;
          margin: 10px 0 10px 53px;
          .progress {
            width: 300px;
            height: 100%;
            position: relative;
            left: 0;
            top: 0;
            background-color: #bccbbf;
            .progress-bar {
              width: 0;
              height: 100%;
              background-color: #1ac272;
            }
          }
          .pro_control {
            position: absolute;
            right: 45px;
            top: -6px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            background-color: #1ac272;
          }
          #progress_value {
            position: absolute;
            right: 0;
            top: -11px;
          }
        }
        .pri_type {
          line-height: 25px;
          margin-left: 50px;
          button {
            line-height: 11px;
            width: 80px;
            text-align: center;
            &:hover {
              background-color: #1ac272;
              color: #fff;
            }
          }
          .selected {
            background-color: #1ac272;
            color: #fff;
          }
        }
        .number {
          span {
            .mix();
            &:nth-child(1) {
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
              cursor: pointer;
              color: #fff;
            }
            &:nth-child(2) {
              border-radius: 0;
              width: 50px;
              background-color: #fafafa;
            }
            &:nth-child(3) {
              border-bottom-right-radius: 5px;
              border-top-right-radius: 5px;
              cursor: pointer;
              color: #fff;
            }
          }
        }
        .money {
          font-size: 30px;
          color: #1ac272;
        }
        .op_btn {
          background-color: #1ac272;
          margin-right: 20px;
          border-radius: 5px;
          font-size: 12px;
          &:hover {
            border-color: #1ac272;
          }
        }
      }
    }
  }
}
</style>

