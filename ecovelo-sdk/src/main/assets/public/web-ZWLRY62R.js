import {
  BarcodeValueType,
  LensFacing
} from "./chunk-B5WTG64I.js";
import {
  CapacitorException,
  ExceptionCode,
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor-mlkit/barcode-scanning/dist/esm/web.js
var BarcodeScannerWeb = class extends WebPlugin {
  constructor() {
    super(...arguments);
    this._isSupported = "BarcodeDetector" in window;
    this.errorVideoElementMissing = "videoElement must be provided.";
    this.eventBarcodesScanned = "barcodesScanned";
  }
  startScan(options) {
    return __async(this, null, function* () {
      if (!this._isSupported) {
        throw this.createUnimplementedException();
      }
      if (!(options === null || options === void 0 ? void 0 : options.videoElement)) {
        throw new Error(this.errorVideoElementMissing);
      }
      this.videoElement = options.videoElement;
      this.stream = yield navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            ideal: (options === null || options === void 0 ? void 0 : options.lensFacing) === LensFacing.Front ? "user" : "environment"
          }
        },
        audio: false
      });
      options.videoElement.srcObject = this.stream;
      yield options.videoElement.play();
      const barcodeDetector = new BarcodeDetector();
      this.intervalId = window.setInterval(() => __async(this, null, function* () {
        if (!options.videoElement) {
          return;
        }
        const barcodes = yield barcodeDetector.detect(options.videoElement);
        if (barcodes.length === 0) {
          return;
        } else {
          this.handleScannedBarcodes(barcodes);
        }
      }), 500);
    });
  }
  stopScan() {
    return __async(this, null, function* () {
      if (!this._isSupported) {
        throw this.createUnimplementedException();
      }
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = void 0;
      }
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = void 0;
      }
      if (this.videoElement) {
        this.videoElement.srcObject = null;
        this.videoElement = void 0;
      }
    });
  }
  readBarcodesFromImage(_options) {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  scan() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  isSupported() {
    return __async(this, null, function* () {
      return {
        supported: this._isSupported
      };
    });
  }
  enableTorch() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  disableTorch() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  toggleTorch() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  isTorchEnabled() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  isTorchAvailable() {
    return __async(this, null, function* () {
      return {
        available: false
      };
    });
  }
  setZoomRatio(_options) {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  getZoomRatio() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  getMinZoomRatio() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  getMaxZoomRatio() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  openSettings() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  isGoogleBarcodeScannerModuleAvailable() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  installGoogleBarcodeScannerModule() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  checkPermissions() {
    return __async(this, null, function* () {
      try {
        const result = yield navigator.permissions.query({
          name: "camera"
        });
        return {
          camera: result.state
        };
      } catch (error) {
        return {
          camera: "prompt"
        };
      }
    });
  }
  requestPermissions() {
    return __async(this, null, function* () {
      try {
        const stream = yield navigator.mediaDevices.getUserMedia({
          video: true
        });
        stream.getTracks().forEach((track) => track.stop());
        return {
          camera: "granted"
        };
      } catch (error) {
        return {
          camera: "denied"
        };
      }
    });
  }
  createUnimplementedException() {
    return new CapacitorException("This method is not implemented on web.", ExceptionCode.Unimplemented);
  }
  handleScannedBarcodes(barcodes) {
    const result = {
      barcodes: barcodes.map((barcode) => ({
        cornerPoints: [[barcode.cornerPoints[0].x, barcode.cornerPoints[0].y], [barcode.cornerPoints[1].x, barcode.cornerPoints[1].y], [barcode.cornerPoints[2].x, barcode.cornerPoints[2].y], [barcode.cornerPoints[3].x, barcode.cornerPoints[3].y]],
        displayValue: barcode.rawValue,
        rawValue: barcode.rawValue,
        format: barcode.format.toUpperCase(),
        valueType: BarcodeValueType.Unknown
      }))
    };
    this.notifyListeners(this.eventBarcodesScanned, result);
  }
};
export {
  BarcodeScannerWeb
};
//# sourceMappingURL=web-ZWLRY62R.js.map
