
"use strict";

let FileList = require('./FileList.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let FileRename = require('./FileRename.js')
let ParamSet = require('./ParamSet.js')
let CommandBool = require('./CommandBool.js')
let CommandHome = require('./CommandHome.js')
let MountConfigure = require('./MountConfigure.js')
let FileRead = require('./FileRead.js')
let CommandAck = require('./CommandAck.js')
let FileTruncate = require('./FileTruncate.js')
let ParamPull = require('./ParamPull.js')
let CommandTOL = require('./CommandTOL.js')
let CommandLong = require('./CommandLong.js')
let FileChecksum = require('./FileChecksum.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let CommandInt = require('./CommandInt.js')
let FileOpen = require('./FileOpen.js')
let WaypointPull = require('./WaypointPull.js')
let FileMakeDir = require('./FileMakeDir.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let ParamPush = require('./ParamPush.js')
let FileWrite = require('./FileWrite.js')
let FileRemove = require('./FileRemove.js')
let SetMode = require('./SetMode.js')
let LogRequestData = require('./LogRequestData.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let ParamGet = require('./ParamGet.js')
let LogRequestList = require('./LogRequestList.js')
let WaypointPush = require('./WaypointPush.js')
let FileClose = require('./FileClose.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let WaypointClear = require('./WaypointClear.js')
let MessageInterval = require('./MessageInterval.js')
let SetMavFrame = require('./SetMavFrame.js')
let StreamRate = require('./StreamRate.js')

module.exports = {
  FileList: FileList,
  VehicleInfoGet: VehicleInfoGet,
  WaypointSetCurrent: WaypointSetCurrent,
  FileRename: FileRename,
  ParamSet: ParamSet,
  CommandBool: CommandBool,
  CommandHome: CommandHome,
  MountConfigure: MountConfigure,
  FileRead: FileRead,
  CommandAck: CommandAck,
  FileTruncate: FileTruncate,
  ParamPull: ParamPull,
  CommandTOL: CommandTOL,
  CommandLong: CommandLong,
  FileChecksum: FileChecksum,
  LogRequestEnd: LogRequestEnd,
  FileRemoveDir: FileRemoveDir,
  CommandInt: CommandInt,
  FileOpen: FileOpen,
  WaypointPull: WaypointPull,
  FileMakeDir: FileMakeDir,
  CommandTriggerInterval: CommandTriggerInterval,
  ParamPush: ParamPush,
  FileWrite: FileWrite,
  FileRemove: FileRemove,
  SetMode: SetMode,
  LogRequestData: LogRequestData,
  CommandTriggerControl: CommandTriggerControl,
  ParamGet: ParamGet,
  LogRequestList: LogRequestList,
  WaypointPush: WaypointPush,
  FileClose: FileClose,
  CommandVtolTransition: CommandVtolTransition,
  WaypointClear: WaypointClear,
  MessageInterval: MessageInterval,
  SetMavFrame: SetMavFrame,
  StreamRate: StreamRate,
};
