import Transaction from './../models/Transaction';
import TransactionRepository from './../repositories/TransactionsRepositorie';

interface CreateInterfaceDTO {
  title: string,
  value: number,
  type: 'income' | 'outcome'
}

export default class CreateTransactionService {
  private transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  execute({title, value, type}: CreateInterfaceDTO): Transaction {
    const transaction = new Transaction(title, value, type);
    this.transactionRepository.create(transaction);
    return transaction;
  }
}