// 定义错误函数
const enosys = (): Error => {
  const err = new Error('not implemented')
  ;(err as any).code = 'ENOSYS'
  return err
}

// 定义文件系统接口
interface FileSystem {
  constants: {
    O_WRONLY: number
    O_RDWR: number
    O_CREAT: number
    O_TRUNC: number
    O_APPEND: number
    O_EXCL: number
    O_DIRECTORY: number
  }
  writeSync(fd: number, buf: Uint8Array): number
  write(fd: number, buf: Uint8Array, offset: number, length: number, position: number | null, callback: (err: Error | null, written?: number) => void): void
  chmod(path: string, mode: number, callback: (err: Error | null) => void): void
  chown(path: string, uid: number, gid: number, callback: (err: Error | null) => void): void
  close(fd: number, callback: (err: Error | null) => void): void
  fchmod(fd: number, mode: number, callback: (err: Error | null) => void): void
  fchown(fd: number, uid: number, gid: number, callback: (err: Error | null) => void): void
  fstat(fd: number, callback: (err: Error | null) => void): void
  fsync(fd: number, callback: (err: Error | null) => void): void
  ftruncate(fd: number, length: number, callback: (err: Error | null) => void): void
  lchown(path: string, uid: number, gid: number, callback: (err: Error | null) => void): void
  link(path: string, link: string, callback: (err: Error | null) => void): void
  lstat(path: string, callback: (err: Error | null) => void): void
  mkdir(path: string, perm: number, callback: (err: Error | null) => void): void
  open(path: string, flags: number, mode: number, callback: (err: Error | null) => void): void
  read(fd: number, buffer: Uint8Array, offset: number, length: number, position: number | null, callback: (err: Error | null) => void): void
  readdir(path: string, callback: (err: Error | null) => void): void
  readlink(path: string, callback: (err: Error | null) => void): void
  rename(from: string, to: string, callback: (err: Error | null) => void): void
  rmdir(path: string, callback: (err: Error | null) => void): void
  stat(path: string, callback: (err: Error | null) => void): void
  symlink(path: string, link: string, callback: (err: Error | null) => void): void
  truncate(path: string, length: number, callback: (err: Error | null) => void): void
  unlink(path: string, callback: (err: Error | null) => void): void
  utimes(path: string, atime: number, mtime: number, callback: (err: Error | null) => void): void
}

interface GlobalThis {
  fs: FileSystem
  process: Process
  crypto: Crypto
  path: {
    // 定义简单的path接口
    resolve(...pathSegments: string[]): string
  }
  performance: Performance
  TextEncoder: TextEncoder
  TextDecoder: TextDecoder
}

declare const globalThis: GlobalThis

// 初始化全局文件系统
if (!globalThis.fs) {
  let outputBuf = ''
  const decoder = new TextDecoder('utf-8')

  globalThis.fs = {
    constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1, O_DIRECTORY: -1 },
    writeSync(fd: number, buf: Uint8Array) {
      outputBuf += decoder.decode(buf)
      const nl = outputBuf.lastIndexOf('\n')
      if (nl != -1) {
        console.log(outputBuf.substring(0, nl))
        outputBuf = outputBuf.substring(nl + 1)
      }
      return buf.length
    },
    write(fd, buf, offset, length, position, callback) {
      if (offset !== 0 || length !== buf.length || position !== null) {
        callback(enosys())
        return
      }
      const n = this.writeSync(fd, buf)
      callback(null, n)
    },
    chmod: (path: string, mode: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    chown: (path: string, uid: number, gid: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    close: (fd: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    fchmod: (fd: number, mode: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    fchown: (fd: number, uid: number, gid: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    fstat: (fd: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    fsync: (fd: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    ftruncate: (fd: number, length: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    lchown: (path: string, uid: number, gid: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    link: (path: string, link: string, callback: (err: Error | null) => void) => {
      enosys()
    },
    lstat: (path: string, callback: (err: Error | null) => void) => {
      enosys()
    },
    mkdir: (path: string, perm: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    open: (path: string, flags: number, mode: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    read: (fd: number, buffer: Uint8Array, offset: number, length: number, position: number | null, callback: (err: Error | null) => void) => {
      enosys()
    },
    readdir: (path: string, callback: (err: Error | null) => void) => {
      enosys()
    },
    readlink: (path: string, callback: (err: Error | null) => void) => {
      enosys()
    },
    rename: (from: string, to: string, callback: (err: Error | null) => void) => {
      enosys()
    },
    rmdir: (path: string, callback: (err: Error | null) => void) => {
      enosys()
    },
    stat: (path: string, callback: (err: Error | null) => void) => {
      enosys()
    },
    symlink: (path: string, link: string, callback: (err: Error | null) => void) => {
      enosys()
    },
    truncate: (path: string, length: number, callback: (err: Error | null) => void) => {
      enosys()
    },
    unlink: (path: string, callback: (err: Error | null) => void) => {
      enosys()
    },
    utimes: (path: string, atime: number, mtime: number, callback: (err: Error | null) => void) => {
      enosys()
    }
  }
}

// 初始化全局进程对象
interface Process {
  getuid(): number
  getgid(): number
  geteuid(): number
  getegid(): number
  getGroups(): number[]
  pid: number
  ppid: number
  umask(): number
  cwd(): string
  chdir(): void
}

if (!globalThis.process) {
  globalThis.process = {
    getuid() {
      return -1
    },
    getgid() {
      return -1
    },
    geteuid() {
      return -1
    },
    getegid() {
      return -1
    },
    getGroups() {
      throw enosys()
    },
    pid: -1,
    ppid: -1,
    umask() {
      throw enosys()
    },
    cwd() {
      throw enosys()
    },
    chdir() {
      throw enosys()
    }
  } as Process
}

if (!globalThis.path) {
  globalThis.path = {
    resolve(...pathSegments) {
      return pathSegments.join('/')
    }
  }
}

// 检查必要的全局对象
if (!globalThis.crypto) {
  throw new Error('globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)')
}

if (!globalThis.performance) {
  throw new Error('globalThis.performance is not available, polyfill required (performance.now only)')
}

if (!globalThis.TextEncoder) {
  throw new Error('globalThis.TextEncoder is not available, polyfill required')
}

if (!globalThis.TextDecoder) {
  throw new Error('globalThis.TextDecoder is not available, polyfill required')
}

const encoder = new TextEncoder()
const decoder = new TextDecoder('utf-8')

interface GoEvent {
  id: number
  this: any
  args: IArguments
  result?: any
}

// Go类定义
export class Go {
  private timeOrigin: number = Date.now() - performance.now()
  private argv: string[]
  private env: Record<string, string>
  private exit: (code: number) => void
  private _exitPromise: Promise<void>
  private _resolveExitPromise!: () => void
  private _pendingEvent: GoEvent | null
  private _scheduledTimeouts: Map<number, any>
  private _nextCallbackTimeoutID: number
  private _inst?: WebAssembly.Instance
  private mem!: DataView
  private _values?: any[]
  private _goRefCounts?: number[]
  private _ids?: Map<any, number>
  private _idPool?: number[]
  public exited: boolean
  public importObject: WebAssembly.Imports

  constructor() {
    this.argv = ['js']
    this.env = {}
    this.exit = (code: number) => {
      if (code !== 0) {
        console.warn('exit code:', code)
      }
    }
    this._exitPromise = new Promise((resolve) => {
      this._resolveExitPromise = resolve
    })
    this._pendingEvent = null
    this._scheduledTimeouts = new Map()
    this._nextCallbackTimeoutID = 1
    this.exited = false

    // 初始化importObject
    this.importObject = {
      _gotest: {
        add: (a: number, b: number): number => a + b,
        callExport: this.testCallExport
      },
      gojs: {
        // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
        // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
        // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
        // This changes the SP, thus we have to update the SP used by the imported function.

        // func wasmExit(code int32)
        'runtime.wasmExit': (sp: number) => {
          sp >>>= 0
          const code = this.mem.getInt32(sp + 8, true)
          this.exited = true
          delete this._inst
          delete this._values
          delete this._goRefCounts
          delete this._ids
          delete this._idPool
          this.exit(code)
        },

        // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
        'runtime.wasmWrite': (sp: number) => {
          sp >>>= 0
          const fd = this.getInt64(sp + 8)
          const p = this.getInt64(sp + 16)
          const n = this.mem.getInt32(sp + 24, true)
          globalThis.fs.writeSync(fd, new Uint8Array((this._inst!.exports.mem as WebAssembly.Memory).buffer, p, n))
        },

        // func resetMemoryDataView()
        'runtime.resetMemoryDataView': (sp: number) => {
          sp >>>= 0
          this.mem = new DataView((this._inst!.exports.mem as WebAssembly.Memory).buffer)
        },

        // func nanotime1() int64
        'runtime.nanotime1': (sp: number) => {
          sp >>>= 0
          this.setInt64(sp + 8, (this.timeOrigin + performance.now()) * 1000000)
        },

        // func walltime() (sec int64, nsec int32)
        'runtime.walltime': (sp: number) => {
          sp >>>= 0
          const msec = new Date().getTime()
          this.setInt64(sp + 8, msec / 1000)
          this.mem.setInt32(sp + 16, (msec % 1000) * 1000000, true)
        },

        // func scheduleTimeoutEvent(delay int64) int32
        'runtime.scheduleTimeoutEvent': (sp: number) => {
          sp >>>= 0
          const id = this._nextCallbackTimeoutID
          this._nextCallbackTimeoutID++
          this._scheduledTimeouts.set(
            id,
            setTimeout(() => {
              this._resume()
              while (this._scheduledTimeouts.has(id)) {
                // for some reason Go failed to register the timeout event, log and try again
                // (temporary workaround for https://github.com/golang/go/issues/28975)
                console.warn('scheduleTimeoutEvent: missed timeout event')
                this._resume()
              }
            }, this.getInt64(sp + 8))
          )
          this.mem.setInt32(sp + 16, id, true)
        },

        // func clearTimeoutEvent(id int32)
        'runtime.clearTimeoutEvent': (sp: number) => {
          sp >>>= 0
          const id = this.mem.getInt32(sp + 8, true)
          clearTimeout(this._scheduledTimeouts.get(id))
          this._scheduledTimeouts.delete(id)
        },

        // func getRandomData(r []byte)
        'runtime.getRandomData': (sp: number) => {
          sp >>>= 0
          crypto.getRandomValues(this.loadSlice(sp + 8))
        },

        // func finalizeRef(v ref)
        'syscall/js.finalizeRef': (sp: number) => {
          sp >>>= 0
          const id = this.mem.getUint32(sp + 8, true)
          this._goRefCounts![id]--
          if (this._goRefCounts![id] === 0) {
            const v = this._values![id]
            this._values![id] = null
            this._ids!.delete(v)
            this._idPool!.push(id)
          }
        },

        // func stringVal(value string) ref
        'syscall/js.stringVal': (sp: number) => {
          sp >>>= 0
          this.storeValue(sp + 24, this.loadString(sp + 8))
        },

        // func valueGet(v ref, p string) ref
        'syscall/js.valueGet': (sp: number) => {
          sp >>>= 0
          const result = Reflect.get(this.loadValue(sp + 8), this.loadString(sp + 16))
          sp = (this._inst!.exports.getsp as CallableFunction)() >>> 0
          this.storeValue(sp + 32, result)
        },

        // func valueSet(v ref, p string, x ref)
        'syscall/js.valueSet': (sp: number) => {
          sp >>>= 0
          Reflect.set(this.loadValue(sp + 8), this.loadString(sp + 16), this.loadValue(sp + 32))
        },

        // func valueDelete(v ref, p string)
        'syscall/js.valueDelete': (sp: number) => {
          sp >>>= 0
          Reflect.deleteProperty(this.loadValue(sp + 8), this.loadString(sp + 16))
        },

        // func valueIndex(v ref, i int) ref
        'syscall/js.valueIndex': (sp: number) => {
          sp >>>= 0
          this.storeValue(sp + 24, Reflect.get(this.loadValue(sp + 8), this.getInt64(sp + 16)))
        },

        // valueSetIndex(v ref, i int, x ref)
        'syscall/js.valueSetIndex': (sp: number) => {
          sp >>>= 0
          Reflect.set(this.loadValue(sp + 8), this.getInt64(sp + 16), this.loadValue(sp + 24))
        },

        // func valueCall(v ref, m string, args []ref) (ref, bool)
        'syscall/js.valueCall': (sp: number) => {
          sp >>>= 0
          try {
            const v = this.loadValue(sp + 8)
            const m = Reflect.get(v, this.loadString(sp + 16))
            const args = this.loadSliceOfValues(sp + 32)
            const result = Reflect.apply(m, v, args)
            sp = (this._inst!.exports.getsp as CallableFunction)() >>> 0
            this.storeValue(sp + 56, result)
            this.mem.setUint8(sp + 64, 1)
          } catch (err) {
            sp = (this._inst!.exports.getsp as CallableFunction)() >>> 0
            this.storeValue(sp + 56, err)
            this.mem.setUint8(sp + 64, 0)
          }
        },

        // func valueInvoke(v ref, args []ref) (ref, bool)
        'syscall/js.valueInvoke': (sp: number) => {
          sp >>>= 0
          try {
            const v = this.loadValue(sp + 8)
            const args = this.loadSliceOfValues(sp + 16)
            const result = Reflect.apply(v, undefined, args)
            sp = (this._inst!.exports.getsp as CallableFunction)() >>> 0
            this.storeValue(sp + 40, result)
            this.mem.setUint8(sp + 48, 1)
          } catch (err) {
            sp = (this._inst!.exports.getsp as CallableFunction)() >>> 0
            this.storeValue(sp + 40, err)
            this.mem.setUint8(sp + 48, 0)
          }
        },

        // func valueNew(v ref, args []ref) (ref, bool)
        'syscall/js.valueNew': (sp: number) => {
          sp >>>= 0
          try {
            const v = this.loadValue(sp + 8)
            const args = this.loadSliceOfValues(sp + 16)
            const result = Reflect.construct(v, args)
            sp = (this._inst!.exports.getsp as CallableFunction)() >>> 0
            this.storeValue(sp + 40, result)
            this.mem.setUint8(sp + 48, 1)
          } catch (err) {
            sp = (this._inst!.exports.getsp as CallableFunction)() >>> 0
            this.storeValue(sp + 40, err)
            this.mem.setUint8(sp + 48, 0)
          }
        },

        // func valueLength(v ref) int
        'syscall/js.valueLength': (sp: number) => {
          sp >>>= 0
          this.setInt64(sp + 16, parseInt(this.loadValue(sp + 8).length))
        },

        // valuePrepareString(v ref) (ref, int)
        'syscall/js.valuePrepareString': (sp: number) => {
          sp >>>= 0
          const str = encoder.encode(String(this.loadValue(sp + 8)))
          this.storeValue(sp + 16, str)
          this.setInt64(sp + 24, str.length)
        },

        // valueLoadString(v ref, b []byte)
        'syscall/js.valueLoadString': (sp: number) => {
          sp >>>= 0
          const str = this.loadValue(sp + 8)
          this.loadSlice(sp + 16).set(str)
        },

        // func valueInstanceOf(v ref, t ref) bool
        'syscall/js.valueInstanceOf': (sp: number) => {
          sp >>>= 0
          this.mem.setUint8(sp + 24, this.loadValue(sp + 8) instanceof this.loadValue(sp + 16) ? 1 : 0)
        },

        // func copyBytesToGo(dst []byte, src ref) (int, bool)
        'syscall/js.copyBytesToGo': (sp: number) => {
          sp >>>= 0
          const dst = this.loadSlice(sp + 8)
          const src = this.loadValue(sp + 32)
          if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
            this.mem.setUint8(sp + 48, 0)
            return
          }
          const toCopy = src.subarray(0, dst.length)
          dst.set(toCopy)
          this.setInt64(sp + 40, toCopy.length)
          this.mem.setUint8(sp + 48, 1)
        },

        // func copyBytesToJS(dst ref, src []byte) (int, bool)
        'syscall/js.copyBytesToJS': (sp: number) => {
          sp >>>= 0
          const dst = this.loadValue(sp + 8)
          const src = this.loadSlice(sp + 16)
          if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
            this.mem.setUint8(sp + 48, 0)
            return
          }
          const toCopy = src.subarray(0, dst.length)
          dst.set(toCopy)
          this.setInt64(sp + 40, toCopy.length)
          this.mem.setUint8(sp + 48, 1)
        },

        debug: (value: any): void => {
          console.log(value)
        }
      }
    }
  }

  // 保持原有的方法实现不变
  async run(instance: WebAssembly.Instance) {
    if (!(instance instanceof WebAssembly.Instance)) {
      throw new Error('Go.run: WebAssembly.Instance expected')
    }
    this._inst = instance
    this.mem = new DataView((this._inst.exports.mem as WebAssembly.Memory).buffer)
    this._values = [
      // JS values that Go currently has references to, indexed by reference id
      NaN,
      0,
      null,
      true,
      false,
      globalThis,
      this
    ]
    this._goRefCounts = new Array(this._values.length).fill(Infinity) // number of references that Go has to a JS value, indexed by reference id
    this._ids = new Map<any, number>([
      [0, 1],
      [null, 2],
      [true, 3],
      [false, 4],
      [globalThis, 5],
      [this, 6]
    ])
    this._idPool = [] // unused ids that have been garbage collected
    this.exited = false // whether the Go program has exited

    // Pass command line arguments and environment variables to WebAssembly by writing them to the linear memory.
    let offset = 4096

    const strPtr = (str: string): number => {
      const ptr = offset
      const bytes = encoder.encode(str + '\0')
      new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes)
      offset += bytes.length
      if (offset % 8 !== 0) {
        offset += 8 - (offset % 8)
      }
      return ptr
    }

    const argc = this.argv.length

    const argvPtrs: number[] = []
    this.argv.forEach((arg) => {
      argvPtrs.push(strPtr(arg))
    })
    argvPtrs.push(0)

    const keys = Object.keys(this.env).sort()
    keys.forEach((key) => {
      argvPtrs.push(strPtr(`${key}=${this.env[key]}`))
    })
    argvPtrs.push(0)

    const argv = offset
    argvPtrs.forEach((ptr) => {
      this.mem.setUint32(offset, ptr, true)
      this.mem.setUint32(offset + 4, 0, true)
      offset += 8
    })

    // The linker guarantees global data starts from at least wasmMinDataAddr.
    // Keep in sync with cmd/link/internal/ld/data.go:wasmMinDataAddr.
    const wasmMinDataAddr = 4096 + 8192
    if (offset >= wasmMinDataAddr) {
      throw new Error('total length of command line and environment variables exceeds limit')
    }

    ;(this._inst!.exports.run as (argc: number, argv: number) => void)(argc, argv)
    if (this.exited) {
      this._resolveExitPromise()
    }
    await this._exitPromise
  }

  private _resume(): void {
    if (this.exited) {
      throw new Error('Go program has already exited')
    }
    ;(this._inst!.exports.resume as CallableFunction)()
    if (this.exited) {
      this._resolveExitPromise()
    }
  }

  private _makeFuncWrapper(id: number): (...args: any[]) => any {
    const go = this
    return function () {
      const event: GoEvent = { id: id, this: this, args: arguments }
      go._pendingEvent = event
      go._resume()
      return event.result
    }
  }

  private getInt64(addr: number): number {
    const low = this.mem.getUint32(addr + 0, true)
    const high = this.mem.getInt32(addr + 4, true)
    return low + high * 4294967296
  }

  private setInt64(addr: number, v: number): void {
    this.mem.setUint32(addr + 0, v, true)
    this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true)
  }

  private loadSlice(addr: number): Uint8Array {
    const array = this.getInt64(addr + 0)
    const len = this.getInt64(addr + 8)
    return new Uint8Array((this._inst!.exports.mem as WebAssembly.Memory).buffer, array, len)
  }

  private storeValue(addr: number, v: any): void {
    const nanHead = 0x7ff80000

    if (typeof v === 'number' && v !== 0) {
      if (isNaN(v)) {
        this.mem.setUint32(addr + 4, nanHead, true)
        this.mem.setUint32(addr, 0, true)
        return
      }
      this.mem.setFloat64(addr, v, true)
      return
    }

    if (v === undefined) {
      this.mem.setFloat64(addr, 0, true)
      return
    }

    let id = this._ids!.get(v)
    if (id === undefined) {
      id = this._idPool!.pop()
      if (id === undefined) {
        id = this._values!.length
      }
      this._values![id] = v
      this._goRefCounts![id] = 0
      this._ids!.set(v, id)
    }
    this._goRefCounts![id]++
    let typeFlag = 0
    switch (typeof v) {
      case 'object':
        if (v !== null) {
          typeFlag = 1
        }
        break
      case 'string':
        typeFlag = 2
        break
      case 'symbol':
        typeFlag = 3
        break
      case 'function':
        typeFlag = 4
        break
    }
    this.mem.setUint32(addr + 4, nanHead | typeFlag, true)
    this.mem.setUint32(addr, id, true)
  }

  private loadString(addr: number): string {
    const saddr = this.getInt64(addr + 0)
    const len = this.getInt64(addr + 8)
    return decoder.decode(new DataView((this._inst!.exports.mem as WebAssembly.Memory).buffer, saddr, len))
  }

  private testCallExport(a: number, b: number): number {
    if (!this._inst) {
      throw new Error('WebAssembly instance is not initialized')
    }

    ;(this._inst.exports.testExport0 as CallableFunction)()
    return (this._inst.exports.testExport as CallableFunction)(a, b)
  }

  private loadValue(addr: number): any {
    const f = this.mem.getFloat64(addr, true)
    if (f === 0) {
      return undefined
    }
    if (!isNaN(f)) {
      return f
    }

    const id = this.mem.getUint32(addr, true)
    return this._values![id]
  }

  private loadSliceOfValues(addr: number): any[] {
    const array = this.getInt64(addr + 0)
    const len = this.getInt64(addr + 8)
    const a = new Array(len)
    for (let i = 0; i < len; i++) {
      a[i] = this.loadValue(array + i * 8)
    }
    return a
  }
}
