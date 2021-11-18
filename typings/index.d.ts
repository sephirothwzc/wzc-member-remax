declare module '*.png';
declare module '*.css';
declare module '*.module.scss';

/**
 * 使用 useForm 来获取 FormInstance，通过 FormInstance 对表单进行操作。
 */
declare type AnnarFormInstance = {
  /**
   * 获取对应字段的错误信息
   */
  getFieldError: (name: string) => any;
  /**
   * 获取所有字段的错误信息
   */
  getFieldsError: () => any;
  /**
   * 获取对应字段的值
   */
  getFieldValue: (name: string) => any;
  /**
   * 获取所有字段的值
   */
  getFieldsValue: () => any;
  /**
   * 设置表单的值
   */
  setFieldsValue: <T>(values: T) => void;
  /**
   * 重置表单的值
   */
  resetFields: <T>(values: T) => void;
  /**
   * 验证表单
   */
  validateFields: () => void;
  /**
   * 	提交表单
   */
  submit: () => void;
};
