/**
 * 作者：Think.
 * 链接：https://juejin.im/post/5bdfef86e51d453bf8051bf8
 * 来源：掘金
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 * 写法1-按钮点击
 * @param {number} status 
 */
const onButtonClick = (status) => {
  if (status == 1) {
    sendLog('processing')
    jumpTo('IndexPage')
  } else if (status == 2) {
    sendLog('fail')
    jumpTo('FailPage')
  } else if (status == 3) {
    sendLog('fail')
    jumpTo('FailPage')
  } else if (status == 4) {
    sendLog('success')
    jumpTo('SuccessPage')
  } else if (status == 5) {
    sendLog('cancel')
    jumpTo('CancelPage')
  } else {
    sendLog('other')
    jumpTo('Index')
  }
}

/**
 * 写法2-按钮点击事件
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClick = (status) => {
  switch (status) {
    case 1:
      sendLog('processing')
      jumpTo('IndexPage')
      break
    case 2:
    case 3:
      sendLog('fail')
      jumpTo('FailPage')
      break
    case 4:
      sendLog('success')
      jumpTo('SuccessPage')
      break
    case 5:
      sendLog('cancel')
      jumpTo('CancelPage')
      break
    default:
      sendLog('other')
      jumpTo('Index')
      break
  }
}

// 写法3
const actions = {
  '1': ['processing', 'IndexPage'],
  '2': ['fail', 'FailPage'],
  '3': ['fail', 'FailPage'],
  '4': ['success', 'SuccessPage'],
  '5': ['cancel', 'CancelPage'],
  'default': ['other', 'Index'],
}

const onButtonClick = (status) => {
  let action = actions[status] || actions["default"],
    logName = action[0],
    pageName = action[1];

  sendLog(logName);
  jumpTo(pageName);
}

// 写法4
const actions = new Map([
  [1, ['processing', 'IndexPage']],
  [2, ['fail', 'FailPage']],
  [3, ['fail', 'FailPage']],
  [4, ['success', 'SuccessPage']],
  [5, ['cancel', 'CancelPage']],
  ['default', ['other', 'Index']]
])

const onButtonClick = (status) => {
  let action = actions.get(status) || actions.get('default'),
    logName = action[0],
    pageName = action[1];

  sendLog(logName);
  jumpTo(pageName);
}

// 我们需要把问题升级一下
// 以前按钮点击时候只需要判断status，现在还需要判断用户的身份

// 写法5
const actions = new Map([
  ['guest_1', () => {/*do sth*/ }],
  ['guest_2', () => {/*do sth*/ }],
  ['guest_3', () => {/*do sth*/ }],
  ['guest_4', () => {/*do sth*/ }],
  ['guest_5', () => {/*do sth*/ }],
  ['master_1', () => {/*do sth*/ }],
  ['master_2', () => {/*do sth*/ }],
  ['master_3', () => {/*do sth*/ }],
  ['master_4', () => {/*do sth*/ }],
  ['master_5', () => {/*do sth*/ }],
  ['default', () => {/*do sth*/ }],
])

const onButtonClick = (identity, status) => {
  let action = actions.get(`${identity}_${status}`) || actions.get('default'),
    logName = action[0],
    pageName = action[1];

  action.call(this);
}

// 写法6
const actions = new Map([
  [{ identity: 'guest', status: 1 }, () => {/*do sth*/ }],
  [{ identity: 'guest', status: 2 }, () => {/*do sth*/ }],
  //...
])

const onButtonClick = (identity, status) => {
  let action = [...actions].filter((([key, value]) => (key.identity == identity && key.status == status)));
  action.map((([key, value]) => value.call(this)))
}