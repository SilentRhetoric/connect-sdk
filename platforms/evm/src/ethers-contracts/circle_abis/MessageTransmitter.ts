/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers';
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from '../common';

export interface MessageTransmitterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'acceptOwnership'
      | 'attesterManager'
      | 'disableAttester'
      | 'enableAttester'
      | 'getEnabledAttester'
      | 'getNumEnabledAttesters'
      | 'isEnabledAttester'
      | 'localDomain'
      | 'maxMessageBodySize'
      | 'nextAvailableNonce'
      | 'owner'
      | 'pause'
      | 'paused'
      | 'pauser'
      | 'pendingOwner'
      | 'receiveMessage'
      | 'replaceMessage'
      | 'rescueERC20'
      | 'rescuer'
      | 'sendMessage'
      | 'sendMessageWithCaller'
      | 'setMaxMessageBodySize'
      | 'setSignatureThreshold'
      | 'signatureThreshold'
      | 'transferOwnership'
      | 'unpause'
      | 'updateAttesterManager'
      | 'updatePauser'
      | 'updateRescuer'
      | 'usedNonces'
      | 'version',
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | 'AttesterDisabled'
      | 'AttesterEnabled'
      | 'AttesterManagerUpdated'
      | 'MaxMessageBodySizeUpdated'
      | 'MessageReceived'
      | 'MessageSent'
      | 'OwnershipTransferStarted'
      | 'OwnershipTransferred'
      | 'Pause'
      | 'PauserChanged'
      | 'RescuerChanged'
      | 'SignatureThresholdUpdated'
      | 'Unpause',
  ): EventFragment;

  encodeFunctionData(
    functionFragment: 'acceptOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'attesterManager',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'disableAttester',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'enableAttester',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'getEnabledAttester',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getNumEnabledAttesters',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'isEnabledAttester',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'localDomain',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'maxMessageBodySize',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'nextAvailableNonce',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pauser', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'pendingOwner',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'receiveMessage',
    values: [BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'replaceMessage',
    values: [BytesLike, BytesLike, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'rescueERC20',
    values: [AddressLike, AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'rescuer', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'sendMessage',
    values: [BigNumberish, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'sendMessageWithCaller',
    values: [BigNumberish, BytesLike, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'setMaxMessageBodySize',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'setSignatureThreshold',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'signatureThreshold',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [AddressLike],
  ): string;
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'updateAttesterManager',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'updatePauser',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'updateRescuer',
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'usedNonces',
    values: [BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'version', values?: undefined): string;

  decodeFunctionResult(
    functionFragment: 'acceptOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'attesterManager',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'disableAttester',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'enableAttester',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getEnabledAttester',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getNumEnabledAttesters',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isEnabledAttester',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'localDomain',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'maxMessageBodySize',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'nextAvailableNonce',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pauser', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'pendingOwner',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'receiveMessage',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'replaceMessage',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'rescueERC20',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'rescuer', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'sendMessage',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'sendMessageWithCaller',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setMaxMessageBodySize',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setSignatureThreshold',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'signatureThreshold',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'updateAttesterManager',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updatePauser',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateRescuer',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'usedNonces', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result;
}

export namespace AttesterDisabledEvent {
  export type InputTuple = [attester: AddressLike];
  export type OutputTuple = [attester: string];
  export interface OutputObject {
    attester: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AttesterEnabledEvent {
  export type InputTuple = [attester: AddressLike];
  export type OutputTuple = [attester: string];
  export interface OutputObject {
    attester: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AttesterManagerUpdatedEvent {
  export type InputTuple = [
    previousAttesterManager: AddressLike,
    newAttesterManager: AddressLike,
  ];
  export type OutputTuple = [
    previousAttesterManager: string,
    newAttesterManager: string,
  ];
  export interface OutputObject {
    previousAttesterManager: string;
    newAttesterManager: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MaxMessageBodySizeUpdatedEvent {
  export type InputTuple = [newMaxMessageBodySize: BigNumberish];
  export type OutputTuple = [newMaxMessageBodySize: bigint];
  export interface OutputObject {
    newMaxMessageBodySize: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MessageReceivedEvent {
  export type InputTuple = [
    caller: AddressLike,
    sourceDomain: BigNumberish,
    nonce: BigNumberish,
    sender: BytesLike,
    messageBody: BytesLike,
  ];
  export type OutputTuple = [
    caller: string,
    sourceDomain: bigint,
    nonce: bigint,
    sender: string,
    messageBody: string,
  ];
  export interface OutputObject {
    caller: string;
    sourceDomain: bigint;
    nonce: bigint;
    sender: string;
    messageBody: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MessageSentEvent {
  export type InputTuple = [message: BytesLike];
  export type OutputTuple = [message: string];
  export interface OutputObject {
    message: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferStartedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PauseEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PauserChangedEvent {
  export type InputTuple = [newAddress: AddressLike];
  export type OutputTuple = [newAddress: string];
  export interface OutputObject {
    newAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RescuerChangedEvent {
  export type InputTuple = [newRescuer: AddressLike];
  export type OutputTuple = [newRescuer: string];
  export interface OutputObject {
    newRescuer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignatureThresholdUpdatedEvent {
  export type InputTuple = [
    oldSignatureThreshold: BigNumberish,
    newSignatureThreshold: BigNumberish,
  ];
  export type OutputTuple = [
    oldSignatureThreshold: bigint,
    newSignatureThreshold: bigint,
  ];
  export interface OutputObject {
    oldSignatureThreshold: bigint;
    newSignatureThreshold: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpauseEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MessageTransmitter extends BaseContract {
  connect(runner?: ContractRunner | null): MessageTransmitter;
  waitForDeployment(): Promise<this>;

  interface: MessageTransmitterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent,
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent,
  ): Promise<this>;

  acceptOwnership: TypedContractMethod<[], [void], 'nonpayable'>;

  attesterManager: TypedContractMethod<[], [string], 'view'>;

  disableAttester: TypedContractMethod<
    [attester: AddressLike],
    [void],
    'nonpayable'
  >;

  enableAttester: TypedContractMethod<
    [newAttester: AddressLike],
    [void],
    'nonpayable'
  >;

  getEnabledAttester: TypedContractMethod<
    [index: BigNumberish],
    [string],
    'view'
  >;

  getNumEnabledAttesters: TypedContractMethod<[], [bigint], 'view'>;

  isEnabledAttester: TypedContractMethod<
    [attester: AddressLike],
    [boolean],
    'view'
  >;

  localDomain: TypedContractMethod<[], [bigint], 'view'>;

  maxMessageBodySize: TypedContractMethod<[], [bigint], 'view'>;

  nextAvailableNonce: TypedContractMethod<[], [bigint], 'view'>;

  owner: TypedContractMethod<[], [string], 'view'>;

  pause: TypedContractMethod<[], [void], 'nonpayable'>;

  paused: TypedContractMethod<[], [boolean], 'view'>;

  pauser: TypedContractMethod<[], [string], 'view'>;

  pendingOwner: TypedContractMethod<[], [string], 'view'>;

  receiveMessage: TypedContractMethod<
    [message: BytesLike, attestation: BytesLike],
    [boolean],
    'nonpayable'
  >;

  replaceMessage: TypedContractMethod<
    [
      originalMessage: BytesLike,
      originalAttestation: BytesLike,
      newMessageBody: BytesLike,
      newDestinationCaller: BytesLike,
    ],
    [void],
    'nonpayable'
  >;

  rescueERC20: TypedContractMethod<
    [tokenContract: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  rescuer: TypedContractMethod<[], [string], 'view'>;

  sendMessage: TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      messageBody: BytesLike,
    ],
    [bigint],
    'nonpayable'
  >;

  sendMessageWithCaller: TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      destinationCaller: BytesLike,
      messageBody: BytesLike,
    ],
    [bigint],
    'nonpayable'
  >;

  setMaxMessageBodySize: TypedContractMethod<
    [newMaxMessageBodySize: BigNumberish],
    [void],
    'nonpayable'
  >;

  setSignatureThreshold: TypedContractMethod<
    [newSignatureThreshold: BigNumberish],
    [void],
    'nonpayable'
  >;

  signatureThreshold: TypedContractMethod<[], [bigint], 'view'>;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    'nonpayable'
  >;

  unpause: TypedContractMethod<[], [void], 'nonpayable'>;

  updateAttesterManager: TypedContractMethod<
    [newAttesterManager: AddressLike],
    [void],
    'nonpayable'
  >;

  updatePauser: TypedContractMethod<
    [_newPauser: AddressLike],
    [void],
    'nonpayable'
  >;

  updateRescuer: TypedContractMethod<
    [newRescuer: AddressLike],
    [void],
    'nonpayable'
  >;

  usedNonces: TypedContractMethod<[arg0: BytesLike], [bigint], 'view'>;

  version: TypedContractMethod<[], [bigint], 'view'>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: 'acceptOwnership',
  ): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'attesterManager',
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'disableAttester',
  ): TypedContractMethod<[attester: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'enableAttester',
  ): TypedContractMethod<[newAttester: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'getEnabledAttester',
  ): TypedContractMethod<[index: BigNumberish], [string], 'view'>;
  getFunction(
    nameOrSignature: 'getNumEnabledAttesters',
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'isEnabledAttester',
  ): TypedContractMethod<[attester: AddressLike], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'localDomain',
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'maxMessageBodySize',
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'nextAvailableNonce',
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'owner',
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'pause',
  ): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'paused',
  ): TypedContractMethod<[], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'pauser',
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'pendingOwner',
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'receiveMessage',
  ): TypedContractMethod<
    [message: BytesLike, attestation: BytesLike],
    [boolean],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'replaceMessage',
  ): TypedContractMethod<
    [
      originalMessage: BytesLike,
      originalAttestation: BytesLike,
      newMessageBody: BytesLike,
      newDestinationCaller: BytesLike,
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'rescueERC20',
  ): TypedContractMethod<
    [tokenContract: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'rescuer',
  ): TypedContractMethod<[], [string], 'view'>;
  getFunction(
    nameOrSignature: 'sendMessage',
  ): TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      messageBody: BytesLike,
    ],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'sendMessageWithCaller',
  ): TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      destinationCaller: BytesLike,
      messageBody: BytesLike,
    ],
    [bigint],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setMaxMessageBodySize',
  ): TypedContractMethod<
    [newMaxMessageBodySize: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'setSignatureThreshold',
  ): TypedContractMethod<
    [newSignatureThreshold: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'signatureThreshold',
  ): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'transferOwnership',
  ): TypedContractMethod<[newOwner: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'unpause',
  ): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'updateAttesterManager',
  ): TypedContractMethod<
    [newAttesterManager: AddressLike],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updatePauser',
  ): TypedContractMethod<[_newPauser: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'updateRescuer',
  ): TypedContractMethod<[newRescuer: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'usedNonces',
  ): TypedContractMethod<[arg0: BytesLike], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'version',
  ): TypedContractMethod<[], [bigint], 'view'>;

  getEvent(
    key: 'AttesterDisabled',
  ): TypedContractEvent<
    AttesterDisabledEvent.InputTuple,
    AttesterDisabledEvent.OutputTuple,
    AttesterDisabledEvent.OutputObject
  >;
  getEvent(
    key: 'AttesterEnabled',
  ): TypedContractEvent<
    AttesterEnabledEvent.InputTuple,
    AttesterEnabledEvent.OutputTuple,
    AttesterEnabledEvent.OutputObject
  >;
  getEvent(
    key: 'AttesterManagerUpdated',
  ): TypedContractEvent<
    AttesterManagerUpdatedEvent.InputTuple,
    AttesterManagerUpdatedEvent.OutputTuple,
    AttesterManagerUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'MaxMessageBodySizeUpdated',
  ): TypedContractEvent<
    MaxMessageBodySizeUpdatedEvent.InputTuple,
    MaxMessageBodySizeUpdatedEvent.OutputTuple,
    MaxMessageBodySizeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'MessageReceived',
  ): TypedContractEvent<
    MessageReceivedEvent.InputTuple,
    MessageReceivedEvent.OutputTuple,
    MessageReceivedEvent.OutputObject
  >;
  getEvent(
    key: 'MessageSent',
  ): TypedContractEvent<
    MessageSentEvent.InputTuple,
    MessageSentEvent.OutputTuple,
    MessageSentEvent.OutputObject
  >;
  getEvent(
    key: 'OwnershipTransferStarted',
  ): TypedContractEvent<
    OwnershipTransferStartedEvent.InputTuple,
    OwnershipTransferStartedEvent.OutputTuple,
    OwnershipTransferStartedEvent.OutputObject
  >;
  getEvent(
    key: 'OwnershipTransferred',
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: 'Pause',
  ): TypedContractEvent<
    PauseEvent.InputTuple,
    PauseEvent.OutputTuple,
    PauseEvent.OutputObject
  >;
  getEvent(
    key: 'PauserChanged',
  ): TypedContractEvent<
    PauserChangedEvent.InputTuple,
    PauserChangedEvent.OutputTuple,
    PauserChangedEvent.OutputObject
  >;
  getEvent(
    key: 'RescuerChanged',
  ): TypedContractEvent<
    RescuerChangedEvent.InputTuple,
    RescuerChangedEvent.OutputTuple,
    RescuerChangedEvent.OutputObject
  >;
  getEvent(
    key: 'SignatureThresholdUpdated',
  ): TypedContractEvent<
    SignatureThresholdUpdatedEvent.InputTuple,
    SignatureThresholdUpdatedEvent.OutputTuple,
    SignatureThresholdUpdatedEvent.OutputObject
  >;
  getEvent(
    key: 'Unpause',
  ): TypedContractEvent<
    UnpauseEvent.InputTuple,
    UnpauseEvent.OutputTuple,
    UnpauseEvent.OutputObject
  >;

  filters: {
    'AttesterDisabled(address)': TypedContractEvent<
      AttesterDisabledEvent.InputTuple,
      AttesterDisabledEvent.OutputTuple,
      AttesterDisabledEvent.OutputObject
    >;
    AttesterDisabled: TypedContractEvent<
      AttesterDisabledEvent.InputTuple,
      AttesterDisabledEvent.OutputTuple,
      AttesterDisabledEvent.OutputObject
    >;

    'AttesterEnabled(address)': TypedContractEvent<
      AttesterEnabledEvent.InputTuple,
      AttesterEnabledEvent.OutputTuple,
      AttesterEnabledEvent.OutputObject
    >;
    AttesterEnabled: TypedContractEvent<
      AttesterEnabledEvent.InputTuple,
      AttesterEnabledEvent.OutputTuple,
      AttesterEnabledEvent.OutputObject
    >;

    'AttesterManagerUpdated(address,address)': TypedContractEvent<
      AttesterManagerUpdatedEvent.InputTuple,
      AttesterManagerUpdatedEvent.OutputTuple,
      AttesterManagerUpdatedEvent.OutputObject
    >;
    AttesterManagerUpdated: TypedContractEvent<
      AttesterManagerUpdatedEvent.InputTuple,
      AttesterManagerUpdatedEvent.OutputTuple,
      AttesterManagerUpdatedEvent.OutputObject
    >;

    'MaxMessageBodySizeUpdated(uint256)': TypedContractEvent<
      MaxMessageBodySizeUpdatedEvent.InputTuple,
      MaxMessageBodySizeUpdatedEvent.OutputTuple,
      MaxMessageBodySizeUpdatedEvent.OutputObject
    >;
    MaxMessageBodySizeUpdated: TypedContractEvent<
      MaxMessageBodySizeUpdatedEvent.InputTuple,
      MaxMessageBodySizeUpdatedEvent.OutputTuple,
      MaxMessageBodySizeUpdatedEvent.OutputObject
    >;

    'MessageReceived(address,uint32,uint64,bytes32,bytes)': TypedContractEvent<
      MessageReceivedEvent.InputTuple,
      MessageReceivedEvent.OutputTuple,
      MessageReceivedEvent.OutputObject
    >;
    MessageReceived: TypedContractEvent<
      MessageReceivedEvent.InputTuple,
      MessageReceivedEvent.OutputTuple,
      MessageReceivedEvent.OutputObject
    >;

    'MessageSent(bytes)': TypedContractEvent<
      MessageSentEvent.InputTuple,
      MessageSentEvent.OutputTuple,
      MessageSentEvent.OutputObject
    >;
    MessageSent: TypedContractEvent<
      MessageSentEvent.InputTuple,
      MessageSentEvent.OutputTuple,
      MessageSentEvent.OutputObject
    >;

    'OwnershipTransferStarted(address,address)': TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;
    OwnershipTransferStarted: TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;

    'OwnershipTransferred(address,address)': TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    'Pause()': TypedContractEvent<
      PauseEvent.InputTuple,
      PauseEvent.OutputTuple,
      PauseEvent.OutputObject
    >;
    Pause: TypedContractEvent<
      PauseEvent.InputTuple,
      PauseEvent.OutputTuple,
      PauseEvent.OutputObject
    >;

    'PauserChanged(address)': TypedContractEvent<
      PauserChangedEvent.InputTuple,
      PauserChangedEvent.OutputTuple,
      PauserChangedEvent.OutputObject
    >;
    PauserChanged: TypedContractEvent<
      PauserChangedEvent.InputTuple,
      PauserChangedEvent.OutputTuple,
      PauserChangedEvent.OutputObject
    >;

    'RescuerChanged(address)': TypedContractEvent<
      RescuerChangedEvent.InputTuple,
      RescuerChangedEvent.OutputTuple,
      RescuerChangedEvent.OutputObject
    >;
    RescuerChanged: TypedContractEvent<
      RescuerChangedEvent.InputTuple,
      RescuerChangedEvent.OutputTuple,
      RescuerChangedEvent.OutputObject
    >;

    'SignatureThresholdUpdated(uint256,uint256)': TypedContractEvent<
      SignatureThresholdUpdatedEvent.InputTuple,
      SignatureThresholdUpdatedEvent.OutputTuple,
      SignatureThresholdUpdatedEvent.OutputObject
    >;
    SignatureThresholdUpdated: TypedContractEvent<
      SignatureThresholdUpdatedEvent.InputTuple,
      SignatureThresholdUpdatedEvent.OutputTuple,
      SignatureThresholdUpdatedEvent.OutputObject
    >;

    'Unpause()': TypedContractEvent<
      UnpauseEvent.InputTuple,
      UnpauseEvent.OutputTuple,
      UnpauseEvent.OutputObject
    >;
    Unpause: TypedContractEvent<
      UnpauseEvent.InputTuple,
      UnpauseEvent.OutputTuple,
      UnpauseEvent.OutputObject
    >;
  };
}
