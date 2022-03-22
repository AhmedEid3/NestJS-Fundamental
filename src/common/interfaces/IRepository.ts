export interface Repository<T> {
  create(): Promise<void>;
  updateOne(...filters: Array<string>): Promise<void>;
  updateMany(...filters: Array<string>): Promise<void>;
  removeOne(...filters: Array<string>): Promise<void>;
  removeMany(...filters: Array<string>): Promise<void>;
  find(): Promise<Array<T>>;
  findOne(...filters: Array<string>): Promise<T | null>;
  findByOneAndUpdate(...filters: Array<string>): Promise<void>;
  findByOneAndRemove(...filters: Array<string>): Promise<void>;
  findById(id: string): Promise<T>;
  findByIdAndUpdate(id: string): Promise<void>;
  findByIdAndRemove(id: string): Promise<void>;
}
